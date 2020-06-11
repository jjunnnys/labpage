const rotateImg = document.querySelector('.js-rotateImg'),
  bgWrapper = document.querySelector('.bg-wrapper'),
  bgWrapperText = document.querySelector('.bg-wrapper__text'),
  dtHeader = document.querySelector('.digitalTwin__header'),
  dtImg = document.querySelector('.digitalTwin__img'),
  DT = document.querySelectorAll('.dt-img__column'),
  realityContents = document.querySelectorAll('.reality__contents'),
  virtualContents = document.querySelectorAll('.virtual__contents');

console.log(realityContents, virtualContents);
let last_known_scroll_position = 0;
let ticking = false;

const secondSection = (scroll_pos) => {
  if (scroll_pos >= 1100 && scroll_pos < 1800) {
    DT[1].classList.remove('virtual');
    DT[1].classList.add('virtual--opacity');
    DT[0].classList.remove('reality--opacity');
    DT[0].classList.add('reality');
  } else {
    DT[0].classList.remove('reality');
    DT[0].classList.add('reality--opacity');
    DT[1].classList.remove('virtual--opacity');
    DT[1].classList.add('virtual');
  }
};

const firstSection = (scroll_pos) => {
  console.log(scroll_pos);
  let opacityValue =
    scroll_pos <= 1000 ? parseFloat((1 - scroll_pos / 1000).toFixed(2)) : 0;
  let scaleValue =
    scroll_pos <= 1000 ? parseFloat((1 - scroll_pos / 1000).toFixed(2)) : 0;
  dtHeader.childNodes[1].style = `opacity: ${opacityValue}; transform: scale(${scaleValue});`;
  dtHeader.childNodes[3].style = `opacity: ${opacityValue}; transform: scale(${scaleValue});`;
};

const bgImg = (scroll_pos) => {
  rotateImg.childNodes[1].style = `transform: rotate(${scroll_pos}deg)`;
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
