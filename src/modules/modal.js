import { animate } from './helpers'

const modal = () => {
  const buttons = document.querySelectorAll('.callback-btn, .button-services, .img-wrapper');
  const buttonBefore = document.querySelectorAll('.img-wrapper-btn');
  const modal = document.querySelector('.modal-callback');
  const overlay = document.querySelector('.modal-overlay');
  let opacity = 0;
  modal.style.opacity = opacity;
  
  const fadeIn = () => {
    animate ({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        modal.style.opacity = progress;
      }
    });
    };
    
  const fadeOut = () => {
    animate ({
      duration: 300,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        modal.style.opacity = progress;
      }
    });
  };

  buttonBefore.forEach(btn => {
    btn.addEventListener('click', () => {
      fadeIn();
    });
  })

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    fadeIn();
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-overlay') || event.target.closest('.modal-close')) {
      fadeOut();
    }
  });
}

export default modal