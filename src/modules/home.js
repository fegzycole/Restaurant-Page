const homePage = () => {
  const container = document.createElement('div');
  container.classList.add('home-page');
  container.id = 'home-page';

  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  const homeBackdrop = document.createElement('div');
  homeBackdrop.classList.add('home-backdrop');

  const mainText = document.createElement('h2');
  mainText.innerText = 'Welcome to Chef Fegzy\'s';

  const cta = document.createElement('button');
  cta.classList.add('cta');
  cta.innerText = 'View Menu';

  const supportingText = document.createElement('p');
  supportingText.innerText = 'Sumptuous meals to keep you coming back for more';

  textContainer.appendChild(mainText);
  textContainer.appendChild(supportingText);
  textContainer.appendChild(cta);

  container.appendChild(homeBackdrop);
  container.appendChild(textContainer);

  return container;
};

export default homePage;
