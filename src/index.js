import './style.css';
import logo from './assets/itunesW.png';
import App from './app.js';

document.querySelector('header img').setAttribute('src', logo);

const theApp = new App();

theApp.run();