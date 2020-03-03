import sectionContainer from './container';

const contact = () => {
  const container = sectionContainer('contact-page', 'Leave a Message', 'contact-page');

  const form = document.createElement('form');
  form.classList.add('form');

  const formHtml = `
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Subject" />
    <input type="text" placeholder="Message" />
    <input type="submit" value="Submit" />
  `;

  form.innerHTML = formHtml;

  container.appendChild(form);

  return container;
};

export default contact;
