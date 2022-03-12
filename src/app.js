import {
  makeRequest, makeScrollable, makeNotScrollable, makeXMLRequest,
} from './utils.js';

class App {
  async getBooksInfo() {
    const result = await makeRequest('https://itunes.apple.com/search?term=javascript&media=ebook&limit=48&country=US');
    this.bookList = [];
    try {
      if (result.results.length > 0) {
        result.results.forEach((element) => {
          this.bookList.push({
            id: element.trackId,
            image: element.artworkUrl100,
            name: element.trackName,
            author: element.artistName,
          });
        });
      }
    } catch {
      return [];
    }
    return this.bookList;
  }

  static getCommentsSize(comments) {
    return comments.length;
  }

  static getComments(id) {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/comments?item_id=${id}`;
    const result = makeRequest(url);
    return result;
  }

  static postComment(id, user, comment) {
    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/comments';
    const body = { item_id: id, username: user, comment };
    makeRequest(url, 'POST', JSON.stringify(body));
  }

  static async getItemInfo(id) {
    const url = ` https://itunes.apple.com/lookup?id=${id}`;
    const result = makeXMLRequest(url);
    return result;
  }

  static async getItemList(url) {
    const result = makeRequest(url);
    return result;
  }

  static postLike(id) {
    const body = { item_id: String(id) };
    makeRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/',
      'POST', JSON.stringify(body));
  }

  static getBiggerImageUrl(url) {
    let newUrl = url.substring(0, url.length - 13);
    newUrl += '500x500bb.jpg';
    return newUrl;
  }

  static removeMarkDown(text) {
    const newString = text.replaceAll(/(<([^>]+)>)/ig, ' ');
    return newString;
  }

  static getHTMLComments(comments) {
    let innerHtml = '';
    comments.forEach((comment) => {
      innerHtml += `
      <div class="comment flex padding-y">
        <p class="date">${comment.creation_date}</p>
        <p class="user bold">${comment.username}</p>
        <p class="comment">${comment.comment}</p>
      </div>
      `;
    });
    return innerHtml;
  }

  static showPopSong(comments, songInfo) {
    const template = document.getElementById('song-popup');
    const popup = template.content.cloneNode(true).children[0];
    popup.querySelector('.image-song').setAttribute('src', App.getBiggerImageUrl(songInfo.artworkUrl100));
    popup.querySelector('.preview').setAttribute('href', songInfo.trackViewUrl);
    popup.querySelector('.title').textContent = songInfo.trackName;
    popup.querySelector('.album').textContent = songInfo.collectionName;
    popup.querySelector('.preview-song').setAttribute('src', songInfo.previewUrl);
    popup.querySelector('.release').textContent = songInfo.releaseDate.substring(0, 10);
    const commentSize = App.getCommentsSize(comments);
    popup.querySelector('.comments h2').textContent = `Comments (${commentSize})`;
    popup.querySelector('.addComment-btn').setAttribute('data-id', songInfo.trackId);
    const commentContainer = popup.querySelector('.comments-container');
    const innerHtml = App.getHTMLComments(comments);
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
      App.postComment(e.target.dataset.id, name.value, comment.value);
      name.value = '';
      comment.value = '';
      name.focus();
      App.getComments(e.target.dataset.id);
      const comments = await App.getComments(e.target.dataset.id);
      const commentContainer = popup.querySelector('.comments-container');
      const innerHtml = App.getHTMLComments(comments);
      commentContainer.innerHTML = innerHtml;
      pop.querySelector('.comments h2').textContent = `Comments (${comments.length})`;
    });
    document.querySelector('body').appendChild(popup);
    makeNotScrollable();
  }

  static showPopBook(comments, bookInfo) {
    const template = document.getElementById('book-popup');
    const popup = template.content.cloneNode(true).children[0];
    popup.querySelector('.image-book').setAttribute('src', App.getBiggerImageUrl(bookInfo.artworkUrl100));
    popup.querySelector('.preview').setAttribute('href', bookInfo.trackViewUrl);
    popup.querySelector('.title').textContent = bookInfo.trackName;
    popup.querySelector('.author').textContent = bookInfo.artistName;
    popup.querySelector('.description').textContent = App.removeMarkDown(bookInfo.description);
    popup.querySelector('.release').textContent = bookInfo.releaseDate.substring(0, 10);
    const commentSize = App.getCommentsSize(comments);
    popup.querySelector('.comments h2').textContent = `Comments (${commentSize})`;
    popup.querySelector('.addComment-btn').setAttribute('data-id', bookInfo.trackId);
    const commentContainer = popup.querySelector('.comments-container');
    const innerHtml = App.getHTMLComments(comments);
    commentContainer.innerHTML = innerHtml;
    popup.querySelector('#close-btn-book').addEventListener('click', () => {
      const pop = document.querySelector('.popup');
      document.querySelector('body').removeChild(pop);
      makeScrollable();
    });
    popup.querySelector('.addComment-btn').addEventListener('click', async (e) => {
      const pop = document.querySelector('.popup');
      const name = pop.querySelector('#name-book');
      const comment = pop.querySelector('#comment-book');
      if (!name.checkValidity()) {
        name.reportValidity();
        return;
      }
      if (!comment.checkValidity()) {
        comment.reportValidity();
        return;
      }
      App.postComment(e.target.dataset.id, name.value, comment.value);
      name.value = '';
      comment.value = '';
      name.focus();
      App.getComments(e.target.dataset.id);
      const comments = await App.getComments(e.target.dataset.id);
      const commentContainer = popup.querySelector('.comments-container');
      const innerHtml = App.getHTMLComments(comments);
      commentContainer.innerHTML = innerHtml;
      pop.querySelector('.comments h2').textContent = `Comments (${comments.length})`;
    });
    document.querySelector('body').appendChild(popup);
    makeNotScrollable();
  }

  getBooksItemsSize() {
    return this.bookList.length;
  }

  getSongsItemsSize() {
    return this.songList.length;
  }

  getLikesForID(id) {
    const item = this.involmentInfo.find((element) => element.item_id === String(id));
    if (!item) return 0;
    return item.likes;
  }

  updateLikesForID(id) {
    const item = this.involmentInfo.find((element) => element.item_id === String(id));
    if (!item) this.involmentInfo.push({ item_id: String(id), likes: 1 });
    else item.likes += 1;
  }

  getItemCard(item) {
    const template = document.getElementById('item-template');
    const card = template.content.cloneNode(true).children[0];
    card.setAttribute('data-id', item.trackId);
    card.querySelector('.title').textContent = item.trackName;
    if (item.collectionName) card.querySelector('.author').textContent = item.collectionName;
    else card.querySelector('.author').textContent = item.artistName;
    card.querySelector('img').setAttribute('src', item.artworkUrl100);
    const commentsBtn = card.querySelector('.comments-btn');
    commentsBtn.setAttribute('data-id', item.trackId);
    if (item.collectionName) {
      commentsBtn.addEventListener('click', async (e) => {
        const promises = [];
        promises.push(App.getComments(e.target.dataset.id));
        promises.push(App.getItemInfo(e.target.dataset.id));
        const resolves = await Promise.all(promises);
        App.showPopSong(resolves[0], resolves[1].results[0]);
      });
    } else {
      commentsBtn.addEventListener('click', async (e) => {
        const promises = [];
        promises.push(App.getComments(e.target.dataset.id));
        promises.push(App.getItemInfo(e.target.dataset.id));
        const resolves = await Promise.all(promises);
        App.showPopBook(resolves[0], resolves[1].results[0]);
      });
    }
    const heart = card.querySelector('.material-icons');
    heart.setAttribute('data-id', item.trackId);
    heart.addEventListener('click', (e) => {
      App.postLike(e.target.dataset.id);
      const likes = this.getLikesForID(e.target.dataset.id);
      e.target.textContent = 'favorite';
      e.target.parentNode.querySelector('.likes').textContent = likes + 1;
      this.updateLikesForID(e.target.dataset.id);
    });
    const likes = this.getLikesForID(item.trackId);
    if (likes === 0) card.querySelector('.material-icons').textContent = 'favorite_border';
    else {
      heart.textContent = 'favorite';
      card.querySelector('.likes').textContent = likes;
    }
    return card;
  }

  fillItemsCards(list) {
    const container = document.getElementById('items-container');
    while (container.lastChild) container.removeChild(container.lastChild);
    list.forEach((item) => {
      const card = this.getItemCard(item);
      container.appendChild(card);
    });
    if (list === this.bookList) {
      document.querySelector('header a[data-href="books"]').textContent = `Books (${this.getBooksItemsSize()})`;
      document.querySelector('header a[data-href="music"]').textContent = 'Music';
    } else {
      document.querySelector('header a[data-href="books"]').textContent = 'Book';
      document.querySelector('header a[data-href="music"]').textContent = `Music (${this.getSongsItemsSize()})`;
    }
  }

  async fillBookCards() {
    const baseUrl = 'https://itunes.apple.com/search?';
    const term = 'algorithm+structure';
    const url = `${baseUrl}term=${term}&media=ebook&limit=48&country=US`;
    const result = await App.getItemList(url);
    this.bookList = [];
    if (result.results.length > 0) {
      this.bookList = result.results;
      this.fillItemsCards(this.bookList);
    }
  }

  async fillSongCards() {
    const baseUrl = 'https://itunes.apple.com/search?';
    const term = 'mozart';
    const url = `${baseUrl}term=${term}&media=music&limit=48&country=US`;
    const result = await App.getItemList(url);
    this.songList = [];
    if (result.results.length > 0) {
      this.songList = result.results;
      this.fillItemsCards(this.songList);
    }
  }

  async getInvolmentInfo() {
    this.involmentInfo = await makeRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/');
    this.involmentInfo.sort((first, second) => {
      if (first.item_id > second.item_id) return -1;
      if (first.item_id < second.item_id) return 1;
      return 0;
    });
  }

  async run() {
    await this.getInvolmentInfo();
    await this.fillBookCards();
    this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener('click', async (e) => {
      if (e.target.matches('header a')) {
        await this.getInvolmentInfo();
        if (e.target.dataset.href === 'music') {
          this.fillSongCards();
          return;
        }
        if (e.target.dataset.href === 'books') {
          this.fillBookCards();
        }
      }
    });
  }
}

export default App;