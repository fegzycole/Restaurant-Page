import navbar from './modules/navbar';
import homePage from './modules/home';
import menuPage from './modules/menu';
import contactPage from './modules/contact';
import handleSections from './modules/handleSections';

const app = document.querySelector('#content');

const home = homePage();
const menu = menuPage();
const contact = contactPage();

app.appendChild(navbar());
app.appendChild(home);
app.appendChild(menu);
app.appendChild(contact);

handleSections(home, menu, contact);

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => handleSections(home, menu, contact));
menuBtn.addEventListener('click', () => handleSections(menu, home, contact));
contactBtn.addEventListener('click', () => handleSections(contact, home, menu));
