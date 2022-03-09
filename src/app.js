import makeRequest from './utils.js';

class App {
  async getBooksInfo() {
    const result = await makeRequest('https://itunes.apple.com/search?term=javascript&media=ebook&limit=48&country=US');
    this.bookList = [];
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
    return this.bookList;
  }

  async getSongsInfo() {
    const result = await makeRequest('https://itunes.apple.com/search?term=the+beatles&media=music&limit=48&country=US');
    this.songList = [];
    if (result.results.length > 0) {
      result.results.forEach((element) => {
        this.songList.push({
          id: element.trackId,
          image: element.artworkUrl100,
          name: element.trackName,
          album: element.collectionName,
          preview: element.previewUrl,
          release: element.releaseDate,
        });
      });
    }
    return this.songList;
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

  static postLike(id) {
    const body = { item_id: String(id) };
    makeRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/',
      'POST', JSON.stringify(body));
  }

  getBookCard(book, template) {
    const card = template.content.cloneNode(true).children[0];
    card.setAttribute('data-id', book.id);
    card.querySelector('.title').textContent = book.name.substr(0, 80);
    card.querySelector('.author').textContent = book.author;
    card.querySelector('img').setAttribute('src', book.image);
    const heart = card.querySelector('.material-icons');
    heart.setAttribute('data-id', book.id);
    heart.addEventListener('click', (e) => {
      App.postLike(e.target.dataset.id);
      const likes = this.getLikesForID(e.target.dataset.id);
      e.target.textContent = 'favorite';
      e.target.parentNode.querySelector('.likes').textContent = likes + 1;
      this.updateLikesForID(e.target.dataset.id);
    });
    const likes = this.getLikesForID(book.id);
    if (likes === 0) card.querySelector('.material-icons').textContent = 'favorite_border';
    else {
      heart.textContent = 'favorite';
      card.querySelector('.likes').textContent = likes;
    }
    return card;
  }

  getSongCard(song, template) {
    const card = template.content.cloneNode(true).children[0];
    card.setAttribute('data-id', song.id);
    card.querySelector('.title').textContent = song.name;
    card.querySelector('.album').textContent = song.album;
    card.querySelector('img').setAttribute('src', song.image);
    const heart = card.querySelector('.material-icons');
    heart.setAttribute('data-id', song.id);
    heart.addEventListener('click', (e) => {
      App.postLike(e.target.dataset.id);
      const likes = this.getLikesForID(e.target.dataset.id);
      e.target.textContent = 'favorite';
      e.target.parentNode.querySelector('.likes').textContent = likes + 1;
      this.updateLikesForID(e.target.dataset.id);
    });
    const likes = this.getLikesForID(song.id);
    if (likes === 0) card.querySelector('.material-icons').textContent = 'favorite_border';
    else {
      heart.textContent = 'favorite';
      card.querySelector('.likes').textContent = likes;
    }
    return card;
  }

  async fillBookCards() {
    this.bookList = await this.getBooksInfo();
    const container = document.getElementById('items-container');
    while (container.lastChild) container.removeChild(container.lastChild);
    const template = document.getElementById('book-template');
    this.bookList.forEach((book) => {
      const card = this.getBookCard(book, template);
      container.appendChild(card);
    });
  }

  async fillSongCards() {
    this.songList = await this.getSongsInfo();
    const container = document.getElementById('items-container');
    while (container.lastChild) container.removeChild(container.lastChild);
    const template = document.getElementById('song-template');
    this.songList.forEach((book) => {
      const card = this.getSongCard(book, template);
      container.appendChild(card);
    });
  }

  async getInvolmentInfo() {
    this.involmentInfo = await makeRequest('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/');
    this.involmentInfo.sort((first, second) => {
      if (first.item_id > second.item_id) return -1;
      if (first.item_id < second.item_id) return 1;
      return 0;
    });
  }

  async init() {
    await this.getInvolmentInfo();
    await this.fillBookCards();
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