const navlistItem = (text, id) => {
  const btn = document.createElement('li');
  btn.innerText = text;
  btn.id = id;

  return btn;
};

export default navlistItem;
