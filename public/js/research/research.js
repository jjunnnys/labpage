const bgWrapper = document.querySelector('.bg-wrapper');
const bgWrapperText = document.querySelector('.bg-wrapper__text');
const cover = document.querySelectorAll('.js-cover');
const modal = document.querySelectorAll('.js-modal');
const modalBtn = document.querySelectorAll('.js-modal-btn');
console.log(modalBtn);

let last_known_scroll_position = 0;
let ticking = false;

const modalObj = {
  showModal0: () => modal[0].classList.add('show-modal'),
  hiddenModal0: () => modal[0].classList.remove('show-modal'),
};

const Research = () => {
  cover[0].addEventListener('click', modalObj.showModal0);
  modalBtn[0].addEventListener('click', modalObj.hiddenModal0);
};

Research();

const bgText = (scroll_pos) => {
  if (scroll_pos >= 1) {
    bgWrapper.classList.remove('animationOut');
    bgWrapper.classList.add('animationIn');
    bgWrapperText.classList.remove('bgTextOut');
    bgWrapperText.classList.add('bg-wrapper__text');
  } else {
    bgWrapper.classList.remove('animationIn');
    bgWrapper.classList.add('animationOut');
    bgWrapperText.classList.remove('bg-wrapper__text');
    bgWrapperText.classList.add('bgTextOut');
  }
};

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      bgText(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});
