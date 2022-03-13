import Likes from './likes.js';
import Comments from './comments.js';
import {
  makeScrollable, makeNotScrollable, makeRequest,
} from './utils.js';
import offLineData from './offlineData.js';

class Songs {
  songList = [];

  likes = {};

  constructor(likes) {
    this.likes = likes;
  }

  static getBiggerImageUrl(url) {
    let newUrl = url.substring(0, url.length - 13);
    newUrl += '500x500bb.jpg';
    return newUrl;
  }

  getSongsItemsSize() {
    return this.songList.length;
  }

  createCard(song) {
    const template = document.getElementById('item-template');
    const card = template.content.cloneNode(true).children[0];
    card.setAttribute('data-id', song.trackId);
    card.querySelector('.title').textContent = song.trackName;
    card.querySelector('.author').textContent = song.collectionName;
    card.querySelector('img').setAttribute('src', song.artworkUrl100);
    const commentsBtn = card.querySelector('.comments-btn');
    commentsBtn.setAttribute('data-id', song.trackId);
    commentsBtn.addEventListener('click', async (e) => {
      const promises = [];
      promises.push(Comments.getComments(e.target.dataset.id));
      promises.push(Songs.getSongInfo(e.target.dataset.id));
      const resolves = await Promise.all(promises);
      Songs.showPopUpWindow(resolves[0], resolves[1].results[0]);
    });
    const heart = card.querySelector('.material-icons');
    heart.setAttribute('data-id', song.trackId);
    heart.addEventListener('click', (e) => {
      Likes.postLike(e.target.dataset.id);
      const likes = this.likes.getLikesForID(e.target.dataset.id);
      e.target.textContent = 'favorite';
      e.target.parentNode.querySelector('.likes').textContent = likes + 1;
      this.likes.updateLikesForID(e.target.dataset.id);
    });
    const likes = this.likes.getLikesForID(song.trackId);
    if (likes === 0) card.querySelector('.material-icons').textContent = 'favorite_border';
    else {
      heart.textContent = 'favorite';
      card.querySelector('.likes').textContent = likes;
    }
    return card;
  }

  static async getSongInfo(id) {
    const url = `https://itunes.apple.com/lookup?id=${id}`;
    const result = makeRequest(url);
    return result;
  }

  static async getSongsList(url) {
    const result = await makeRequest(url);
    if (!result.length) {
      result.results = offLineData;
    }
    return result;
  }

  async fillCards() {
    const baseUrl = 'https://itunes.apple.com/search?';
    const term = 'the+beatles';
    const url = `${baseUrl}term=${term}&media=music&limit=48&country=US`;
    const result = await Songs.getSongsList(url);
    this.songList = [];
    if (result.results.length === 0) return;
    this.songList = result.results;
    const container = document.getElementById('items-container');
    while (container.lastChild) container.removeChild(container.lastChild);
    this.songList.forEach((song) => {
      const card = this.createCard(song);
      container.appendChild(card);
    });
    document.querySelector('header a[data-href="books"]').textContent = 'Books';
    document.querySelector('header a[data-href="music"]').textContent = `Music (${this.getSongsItemsSize()})`;
  }

  static showPopUpWindow(comments, songInfo) {
    const template = document.getElementById('song-popup');
    const popup = template.content.cloneNode(true).children[0];
    popup.querySelector('.image-song').setAttribute('src', Songs.getBiggerImageUrl(songInfo.artworkUrl100));
    popup.querySelector('.preview').setAttribute('href', songInfo.trackViewUrl);
    popup.querySelector('.preview').textContent = songInfo.trackViewUrl;
    popup.querySelector('.title').textContent = songInfo.trackName;
    popup.querySelector('.album').textContent = songInfo.collectionName;
    popup.querySelector('.preview-song').setAttribute('src', songInfo.previewUrl);
    popup.querySelector('.release').textContent = songInfo.releaseDate.substring(0, 10);
    const commentSize = Comments.getCommentsSize(comments);
    popup.querySelector('.comments h2').textContent = `Comments (${commentSize})`;
    popup.querySelector('.addComment-btn').setAttribute('data-id', songInfo.trackId);
    const commentContainer = popup.querySelector('.comments-container');
    const innerHtml = Comments.getHTMLComments(comments);
    commentContainer.innerHTML = innerHtml;
    popup.querySelector('#close-btn-song').addEventListener('click', () => {
      const pop = document.querySelector('.popup');
      document.querySelector('body').removeChild(pop);
      makeScrollable();
    });
    popup.querySelector('.addComment-btn').addEventListener('click', async (e) => {
      const pop = document.querySelector('.popup');
      const name = pop.querySelector('#name-song');
      const comment = pop.querySelector('#comment-song');
      if (!name.checkValidity()) {
        name.reportValidity();
        return;
      }
      if (!comment.checkValidity()) {
        comment.reportValidity();
        return;
      }
      Comments.postComment(e.target.dataset.id, name.value, comment.value);
      name.value = '';
      comment.value = '';
      name.focus();
      const comments = await Comments.getComments(e.target.dataset.id);
      const commentContainer = popup.querySelector('.comments-container');
      const innerHtml = Comments.getHTMLComments(comments);
      commentContainer.innerHTML = innerHtml;
      pop.querySelector('.comments h2').textContent = `Comments (${comments.length})`;
    });
    document.querySelector('body').appendChild(popup);
    makeNotScrollable();
  }
}

export default Songs;