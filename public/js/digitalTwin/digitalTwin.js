const rotateImg = document.querySelector('.js-rotateImg');
const bgWrapper = document.querySelector('.bg-wrapper');
const bgWrapperText = document.querySelector('.bg-wrapper__text');
const dtHeader = document.querySelector('.digitalTwin__header');
const dtImg = document.querySelector('.digitalTwin__img');
const reality = document.querySelector('.reality');
const virtual = document.querySelector('.virtual');

let last_known_scroll_position = 0;
let ticking = false;

const secondSection = (scroll_pos) => {
  if (scroll_pos >= 1200 && scroll_pos < 1700) {
    reality.classList.remove('reality--opacity');
    virtual.classList.add('virtual--opacity');
  } else if (scroll_pos >= 1700 && scroll_pos < 2300) {
    reality.classList.add('reality--opacity');
    virtual.classList.remove('virtual--opacity');
  } else {
    reality.classList.add('reality--opacity');
    virtual.classList.add('virtual--opacity');
  }
};

const firstSection = (scroll_pos) => {
  let opacityValue =
    scroll_pos <= 1000 ? parseFloat((1 - scroll_pos / 1000).toFixed(2)) : 0;
  let scaleValue =
    scroll_pos <= 1000 ? parseFloat((1 - scroll_pos / 1000).toFixed(2)) : 0;
  dtHeader.childNodes[1].style = `opacity: ${opacityValue}; transform: scale(${scaleValue});`;
  dtHeader.childNodes[3].style = `opacity: ${opacityValue}; transform: scale(${scaleValue});`;
};

const bgImg = (scroll_pos) => {
  if (scroll_pos > 2300) {
    rotateImg.style = `opacity:0; transform: rotate(${scroll_pos}deg)`;
  } else {
    rotateImg.style = `opacity:1; transform: rotate(${scroll_pos}deg)`;
  }
};

const bgText = (scroll_pos) => {
  if (scroll_pos >= 300) {
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
      bgImg(last_known_scroll_position);
      firstSection(last_known_scroll_position);
      secondSection(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});
