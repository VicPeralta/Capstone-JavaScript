/**
 * @jest-environment jsdom
 */

import App from '../src/app.js';

describe('Items counter test', () => {
  test('Item Book counter test', () => {
    const theApp = new App();
    const spy = jest.spyOn(theApp, 'getBooksInfo').mockImplementation(() => {
      const items = [
        {
          id: 1,
          image: 'element.artworkUrl100',
          name: 'element.trackName',
          author: 'element.artistName',
        },
        {
          id: 2,
          image: 'element.artworkUrl100',
          name: 'element.trackName',
          author: 'element.artistName',
        },
        {
          id: 3,
          image: 'element.artworkUrl100',
          name: 'element.trackName',
          author: 'element.artistName',
        },
      ];
      return items;
    });
    theApp.bookList = theApp.getBooksInfo();
    expect(theApp.getBooksItemsSize()).toBe(3);
    spy.mockRestore();
  });
  test('Song Book counter test', () => {
    const theApp = new App();
    const spy = jest.spyOn(theApp, 'getSongsInfo').mockImplementation(() => {
      const items = [
        {
          id: 1,
          image: 'element.artworkUrl100',
          name: 'element.trackName',
          author: 'element.artistName',
        },
        {
          id: 2,
          image: 'element.artworkUrl100',
          name: 'element.trackName',
          author: 'element.artistName',
        },
        {
          id: 3,
          image: 'element.artworkUrl100',
          name: 'element.trackName',
          author: 'element.artistName',
        },
        {
          id: 4,
          image: 'element.artworkUrl100',
          name: 'element.trackName',
          author: 'element.artistName',
        },
      ];
      return items;
    });
    theApp.songList = theApp.getSongsInfo();
    expect(theApp.getSongsItemsSize()).toBe(4);
    spy.mockRestore();
  });
});

describe('Comments counter test', () => {
  test('Comments counter', () => {
    const spy = jest.spyOn(App, 'getComments').mockImplementation(() => {
      const items = [
        {
          comment: 'Hello',
          username: 'Jane',
          creation_date: '2022-03-10',
        },
        {
          comment: 'Hello',
          username: 'Jane',
          creation_date: '2022-03-10',
        },
        {
          comment: 'Hello',
          username: 'Jane',
          creation_date: '2022-03-10',
        },
      ];
      return items;
    });
    const comments = App.getComments();
    const counter = App.getCommentsSize(comments);
    expect(counter).toBe(3);
    spy.mockRestore();
  });
});