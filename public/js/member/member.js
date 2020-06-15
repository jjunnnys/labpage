const bgWrapper = document.querySelector('.bg-wrapper');
const bgWrapperText = document.querySelector('.bg-wrapper__text');
const mImg = document.querySelector('.js-mImg');
const mInfo = document.querySelector('.member__info');
const email = document.querySelector('.email');

let last_known_scroll_position = 0;
let ticking = false;

const imgHandle = {
  showImg: () => mInfo.classList.add('member__info-show'),
  hiddenImg: () => mInfo.classList.remove('member__info-show'),
  showEmail: () => email.classList.add('email-show'),
  hiddenEmail: () => email.classList.remove('email-show'),
};

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

const Member = () => {
  mImg.addEventListener('mouseenter', imgHandle.showImg);
  mImg.addEventListener('mouseenter', imgHandle.showEmail);
  mImg.addEventListener('mouseleave', imgHandle.hiddenImg);
  mImg.addEventListener('mouseleave', imgHandle.hiddenEmail);
};

Member();

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
