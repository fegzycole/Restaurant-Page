import navbar from './modules/navbar';
import homePage from './modules/home';
import menuPage from './modules/menu';

const app = document.querySelector('#content');

app.appendChild(navbar());
app.appendChild(homePage());
app.appendChild(menuPage());
