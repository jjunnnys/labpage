const trigger = document.querySelector('.js-trigger');

const triggerHandle = () => {
  window.scrollTo({
    top: 1000,
    left: 100,
    behavior: 'smooth',
  });
};

const Trigger = () => {
  trigger.addEventListener('click', triggerHandle);
};

Trigger();

// 900
