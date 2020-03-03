const handleSections = (section1, section2, section3) => {
  if (section2.hasAttribute('style')) {
    section2.removeAttribute('style');
  }

  if (section3.hasAttribute('style')) {
    section3.removeAttribute('style');
  }

  section1.setAttribute('style', 'display: block !important');
};

export default handleSections;
