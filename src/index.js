import header from './modules/navbar';
import homePage from './modules/home';
import menuPage from './modules/menu';
import contactPage from './modules/contact';

const app = document.querySelector('#content');

const home = homePage();
const menu = menuPage();
const contact = contactPage();
const navbar = header();

const show = (section) => {
  app.innerHTML = '';
  app.appendChild(navbar);
  app.appendChild(section);
};

show(home);

const ctaBtn = document.querySelector('.cta');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

const displaySection = (e) => {
  if (e.target === homeBtn) {
    show(home);
  } else if (e.target === menuBtn || e.target === ctaBtn) {
    show(menu);
  } else {
    show(contact);
  }
};

homeBtn.addEventListener('click', displaySection);
menuBtn.addEventListener('click', displaySection);
contactBtn.addEventListener('click', displaySection);
ctaBtn.addEventListener('click', displaySection);
