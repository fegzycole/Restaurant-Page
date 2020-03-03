import navListContainer from './navlist';
import navLogo from './logo';

const navbar = () => {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  nav.appendChild(navLogo());
  nav.appendChild(navListContainer());

  return nav;
};

export default navbar;
