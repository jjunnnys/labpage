const bgWrapper = document.querySelector('.bg-wrapper');
const bgWrapperText = document.querySelector('.bg-wrapper__text');
const mImg = document.querySelectorAll('.js-mImg');
const mInfo = document.querySelectorAll('.member__info');
const email = document.querySelectorAll('.email');
const github = document.querySelector('.github');

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

  showImg2: () => mInfo[2].classList.add('member__info-show'),
  hiddenImg2: () => mInfo[2].classList.remove('member__info-show'),
  showEmail2: () => email[2].classList.add('email-show'),
  hiddenEmail2: () => email[2].classList.remove('email-show'),

  showImg3: () => mInfo[3].classList.add('member__info-show'),
  hiddenImg3: () => mInfo[3].classList.remove('member__info-show'),
  showEmail3: () => email[3].classList.add('email-show'),
  hiddenEmail3: () => email[3].classList.remove('email-show'),
  showGithub: () => github.classList.add('github-show'),
  hiddenGithub: () => github.classList.remove('github-show'),
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

  mImg[2].addEventListener('mouseenter', imgHandle.showImg2);
  mImg[2].addEventListener('mouseenter', imgHandle.showEmail2);
  mImg[2].addEventListener('mouseleave', imgHandle.hiddenImg2);
  mImg[2].addEventListener('mouseleave', imgHandle.hiddenEmail2);

  mImg[3].addEventListener('mouseenter', imgHandle.showImg3);
  mImg[3].addEventListener('mouseenter', imgHandle.showEmail3);
  mImg[3].addEventListener('mouseleave', imgHandle.hiddenImg3);
  mImg[3].addEventListener('mouseleave', imgHandle.hiddenEmail3);
  mImg[3].addEventListener('mouseenter', imgHandle.showGithub);
  mImg[3].addEventListener('mouseleave', imgHandle.hiddenGithub);
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
