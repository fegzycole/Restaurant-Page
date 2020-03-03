const sectionContainer = (className, headerText, id) => {
  const container = document.createElement('div');
  container.classList.add(className);

  const header = document.createElement('h3');
  header.innerText = headerText;

  container.appendChild(header);

  container.id = id;

  return container;
};

export default sectionContainer;
