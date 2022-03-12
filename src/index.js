import './style.css';
import logo from './assets/itunesW.png';
import App from './app.js';

function callData(data) {
  console.log(data);
}

document.querySelector('header img').setAttribute('src', logo);

const theApp = new App();

theApp.run();