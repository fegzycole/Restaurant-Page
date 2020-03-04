const logo = () => {
  const logo = document.createElement('div');
  logo.classList.add('header-logo');

  const logoImage = document.createElement('img');
  logoImage.setAttribute('src', 'images/cook-hat.svg');

  const logoText = document.createElement('h4');
  logoText.innerText = "Fegzy's";

  logo.appendChild(logoImage);
  logo.appendChild(logoText);

  return logo;
};

export default logo;
