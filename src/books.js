import Likes from './likes.js';
import Comments from './comments.js';
import {
  makeScrollable, makeNotScrollable, lookUpBookInfo,
} from './utils.js';

class Books {
  bookList = [];

  likes = {};

  constructor(likes) {
    this.likes = likes;
  }

  // Return the information of one book
  static async getBookInfo(id) {
    const url = `https://api.itbook.store/1.0/books/${id}`;
    const result = lookUpBookInfo(url);
    return result;
  }

  // Return the list of books
  static async getBookList(url) {
    const result = lookUpBookInfo(url);
    return result;
  }

  getBooksItemsSize() {
    return this.bookList.length;
  }

  createCard(book) {
    const template = document.getElementById('item-template');
    const card = template.content.cloneNode(true).children[0];
    card.setAttribute('data-id', book.isbn13);
    card.querySelector('.title').textContent = book.title;
    card.querySelector('.author').textContent = book.subtitle;
    card.querySelector('img').setAttribute('src', book.image);
    const commentsBtn = card.querySelector('.comments-btn');
    commentsBtn.setAttribute('data-id', book.isbn13);
    commentsBtn.addEventListener('click', async (e) => {
      const promises = [];
      promises.push(Comments.getComments(e.target.dataset.id));
      promises.push(Books.getBookInfo(e.target.dataset.id));
      const resolves = await Promise.all(promises);
      Books.showPopUpWindow(resolves[0], resolves[1]);
    });
    const heart = card.querySelector('.material-icons');
    heart.setAttribute('data-id', book.isbn13);
    heart.addEventListener('click', (e) => {
      Likes.postLike(e.target.dataset.id);
      const likes = this.likes.getLikesForID(e.target.dataset.id);
      e.target.textContent = 'favorite';
      e.target.parentNode.querySelector('.likes').textContent = likes + 1;
      this.likes.updateLikesForID(e.target.dataset.id);
    });
    const likes = this.likes.getLikesForID(book.isbn13);
    if (likes === 0) card.querySelector('.material-icons').textContent = 'favorite_border';
    else {
      heart.textContent = 'favorite';
      card.querySelector('.likes').textContent = likes;
    }
    return card;
  }

  async fillCards() {
    const baseUrl = 'https://api.itbook.store/1.0/search/';
    const term = 'data+structure';
    const url = `${baseUrl}${term}`;
    const result = await Books.getBookList(url);
    this.bookList = [];
    if (result.books.length === 0) return;
    this.bookList = result.books;
    const container = document.getElementById('items-container');
    while (container.lastChild) container.removeChild(container.lastChild);
    this.bookList.forEach((book) => {
      const card = this.createCard(book);
      container.appendChild(card);
    });
    document.querySelector('header a[data-href="books"]').textContent = `Books (${this.getBooksItemsSize()})`;
    document.querySelector('header a[data-href="music"]').textContent = 'Music';
  }

  static showPopUpWindow(comments, bookInfo) {
    const template = document.getElementById('book-popup');
    const popup = template.content.cloneNode(true).children[0];
    popup.querySelector('.image-book').setAttribute('src', bookInfo.image);
    popup.querySelector('.preview').setAttribute('href', bookInfo.url);
    popup.querySelector('.preview').textContent = bookInfo.url;
    popup.querySelector('.title').textContent = bookInfo.title;
    popup.querySelector('.author').textContent = bookInfo.subtitle;
    popup.querySelector('.description').textContent = bookInfo.desc;
    popup.querySelector('.release').textContent = bookInfo.year;
    const commentSize = Comments.getCommentsSize(comments);
    popup.querySelector('.comments h2').textContent = `Comments (${commentSize})`;
    popup.querySelector('.addComment-btn').setAttribute('data-id', bookInfo.isbn13);
    const commentContainer = popup.querySelector('.comments-container');
    const innerHtml = Comments.getHTMLComments(comments);
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

export default Books;