'use stript';
const body = document.querySelector('.js-backgroundImg');

const IMG_NUMBER = 17;

const paintImage = (imgNumber) => {
  const image = new Image();
  image.src = `img/momentum/${imgNumber + 1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
};

const genRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
};

const Bg = () => {
  const randomNumber = genRandom();
  paintImage(randomNumber);
};

Bg();
