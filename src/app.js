import Likes from './likes.js';
import Songs from './songs.js';
import Books from './books.js';

class App {
  likes = new Likes();

  songs = new Songs(this.likes);

  books = new Books(this.likes);

  async run() {
    await this.likes.getLikesInfo();
    await this.books.fillCards();
    this.addEventListeners();
  }

  addEventListeners() {
    document.addEventListener('click', async (e) => {
      if (e.target.matches('header a')) {
        await this.likes.getLikesInfo();
        if (e.target.dataset.href === 'music') {
          this.songs.fillCards();
          return;
        }
        if (e.target.dataset.href === 'books') {
          this.books.fillCards();
        }
      }
    });
  }
}

export default App;