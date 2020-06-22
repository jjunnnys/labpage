const trigger = document.querySelector('.js-trigger');
const pageUp = document.querySelector('.js-page-up');

const triggerHandle = () => {
  window.scrollTo({
    top: 900,
    left: 100,
    behavior: 'smooth',
  });
};

const pageUpHandle = () => {
  window.scrollTo({
    top: 0,
    left: 100,
    behavior: 'smooth',
  });
};

const Trigger = () => {
  trigger.addEventListener('click', triggerHandle);
  pageUp.addEventListener('click', pageUpHandle);
};

Trigger();

// 900
