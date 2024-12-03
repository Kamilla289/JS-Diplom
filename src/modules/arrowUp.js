const arrowUp = () => {
  const upButton = document.querySelector('.up');
  const servicesBlock = document.querySelector('#services');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= servicesBlock.offsetTop) {
    upButton.style.display = 'block';
    } else {
    upButton.style.display = 'none';
    }
  });

  upButton.addEventListener('click', () => {
    window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    });
  });
}

export default arrowUp