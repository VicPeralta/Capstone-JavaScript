import './style.css';
import logo from './assets/tunes4.png';

document.querySelector('header img').setAttribute('src', logo);

async function makeRequest(url, method = 'GET') {
  try {
    const options = {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const results = await fetch(url, options).then((data) => data.json());
    return results;
  } catch {
    return [];
  }
}

async function getBooksInfo() {
  const result = await makeRequest('https://itunes.apple.com/search?term=javascript&media=ebook&limit=48&country=US');
  const bookList = [];
  if (result.results.length > 0) {
    result.results.forEach((element) => {
      bookList.push({
        id: element.trackId,
        image: element.artworkUrl100,
        name: element.trackName,
        author: element.artistName,
      });
    });
  }
  return bookList;
}

async function getSongsInfo() {
  const result = await makeRequest('https://itunes.apple.com/search?term=the+beatles&media=music&limit=48&country=US');
  const songList = [];
  if (result.results.length > 0) {
    result.results.forEach((element) => {
      songList.push({
        id: element.trackId,
        image: element.artworkUrl100,
        name: element.trackName,
        album: element.collectionName,
        preview: element.previewUrl,
        release: element.releaseDate,
      });
    });
  }
  return songList;
}

function getBookCard(book, template) {
  const card = template.content.cloneNode(true).children[0];
  card.setAttribute('data-id', book.id);
  card.querySelector('.title').textContent = book.name.substr(0, 80);
  card.querySelector('.author').textContent = book.author;
  card.querySelector('img').setAttribute('src', book.image);
  return card;
}

function getSongCard(song, template) {
  const card = template.content.cloneNode(true).children[0];
  card.setAttribute('data-id', song.id);
  card.querySelector('.title').textContent = song.name;
  card.querySelector('.album').textContent = song.album;
  card.querySelector('img').setAttribute('src', song.image);
  return card;
}

async function fillBookCards() {
  const bookList = await getBooksInfo();
  const container = document.getElementById('items-container');
  while (container.lastChild) container.removeChild(container.lastChild);
  const template = document.getElementById('book-template');
  bookList.forEach((book) => {
    const card = getBookCard(book, template);
    container.appendChild(card);
  });
}

async function fillSongCards() {
  const bookList = await getSongsInfo();
  const container = document.getElementById('items-container');
  while (container.lastChild) container.removeChild(container.lastChild);
  const template = document.getElementById('song-template');
  bookList.forEach((book) => {
    const card = getSongCard(book, template);
    container.appendChild(card);
  });
}

fillBookCards();

document.addEventListener('click', (e) => {
  if (e.target.matches('header a')) {
    if (e.target.dataset.href === 'music') {
      fillSongCards();
      return;
    }
    if (e.target.dataset.href === 'books') {
      fillBookCards();
    }
  }
});
