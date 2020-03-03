import navbar from './modules/navbar';
import homePage from './modules/home';

const app = document.querySelector('#content');

app.appendChild(navbar());
app.appendChild(homePage());