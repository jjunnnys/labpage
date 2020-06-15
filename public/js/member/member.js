const bgWrapper = document.querySelector('.bg-wrapper');
const bgWrapperText = document.querySelector('.bg-wrapper__text');
const mImg = document.querySelectorAll('.js-mImg');
const mInfo = document.querySelectorAll('.member__info');
const mInfoR = document.querySelectorAll('.member__infoR');
const email = document.querySelectorAll('.email');

let last_known_scroll_position = 0;
let ticking = false;

const imgHandle = {
  showImg0: () => mInfo[0].classList.add('member__info-show'),
  hiddenImg0: () => mInfo[0].classList.remove('member__info-show'),
  showEmail0: () => email[0].classList.add('email-show'),
  hiddenEmail0: () => email[0].classList.remove('email-show'),

  showImg1: () => mInfo[1].classList.add('member__info-show'),
  hiddenImg1: () => mInfo[1].classList.remove('member__info-show'),
  showEmail1: () => email[1].classList.add('email-show'),
  hiddenEmail1: () => email[1].classList.remove('email-show'),

  showImgR0: () => mInfoR[0].classList.add('member__info-showR'),
  hiddenImgR0: () => mInfoR[0].classList.remove('member__info-showR'),
  showEmail2: () => email[2].classList.add('email-show'),
  hiddenEmail2: () => email[2].classList.remove('email-show'),

  showImgR1: () => mInfoR[1].classList.add('member__info-showR'),
  hiddenImgR1: () => mInfoR[1].classList.remove('member__info-showR'),
  showEmail3: () => email[3].classList.add('email-show'),
  hiddenEmail3: () => email[3].classList.remove('email-show'),
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
  mImg[0].addEventListener('mouseenter', imgHandle.showImg0);
  mImg[0].addEventListener('mouseenter', imgHandle.showEmail0);
  mImg[0].addEventListener('mouseleave', imgHandle.hiddenImg0);
  mImg[0].addEventListener('mouseleave', imgHandle.hiddenEmail0);

  mImg[1].addEventListener('mouseenter', imgHandle.showImg1);
  mImg[1].addEventListener('mouseenter', imgHandle.showEmail1);
  mImg[1].addEventListener('mouseleave', imgHandle.hiddenImg1);
  mImg[1].addEventListener('mouseleave', imgHandle.hiddenEmail1);

  mImg[2].addEventListener('mouseenter', imgHandle.showImgR0);
  mImg[2].addEventListener('mouseenter', imgHandle.showEmail2);
  mImg[2].addEventListener('mouseleave', imgHandle.hiddenImgR0);
  mImg[2].addEventListener('mouseleave', imgHandle.hiddenEmail2);

  mImg[3].addEventListener('mouseenter', imgHandle.showImgR1);
  mImg[3].addEventListener('mouseenter', imgHandle.showEmail3);
  mImg[3].addEventListener('mouseleave', imgHandle.hiddenImgR1);
  mImg[3].addEventListener('mouseleave', imgHandle.hiddenEmail3);
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
