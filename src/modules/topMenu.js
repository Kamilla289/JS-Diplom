const topMenu = () => {
  const links = document.querySelectorAll('.top-menu a');
    links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView ({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

export default topMenu;