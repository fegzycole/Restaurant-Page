import navListItem from './navlistitem';

const navList = () => {
  const container = document.createElement('ul');
  container.classList.add('unordered-list');

  const homeBtn = navListItem('Home', 'home');

  const menuBtn = navListItem('Menu', 'menu');

  const contactBtn = navListItem('Contact Us', 'contact');

  container.appendChild(homeBtn);
  container.appendChild(menuBtn);
  container.appendChild(contactBtn);

  return container;
};

export default navList;
