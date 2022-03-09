/**
 * @jest-environment jsdom
 */

import App from '../src/app.js';

describe('Items counter test', () => {
  test('Item counter tes', () => { 
    const theApp = new App();
    theApp.getBooksInfo();
  });
});