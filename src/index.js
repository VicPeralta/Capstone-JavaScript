import './style.css';
import logo from './assets/tunes4.png';
import App from './app.js';

document.querySelector('header img').setAttribute('src', logo);

const theApp = new App();

theApp.init();
theApp.addEventListeners();