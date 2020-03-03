const navList = () => {
  const container = document.createElement('ul');
  container.classList.add('unordered-list');

  const items = ['Home', 'Menu', 'Contact Us'];

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerText = item;
    container.appendChild(listItem);
  });

  return container;
};

export default navList;
