const bgWrapper = document.querySelector('.bg-wrapper');
const bgWrapperText = document.querySelector('.bg-wrapper__text');
const cover = document.querySelectorAll('.js-cover');
const modal = document.querySelectorAll('.js-modal');
const modalBtn = document.querySelectorAll('.js-modal-btn');

let last_known_scroll_position = 0;
let ticking = false;

const madalObj = {
  showModal0: () => {
    modal[0].classList.remove('hidden-modal');
    modal[0].classList.add('show-modal');
  },
  showModal1: () => {
    modal[1].classList.remove('hidden-modal');
    modal[1].classList.add('show-modal');
  },
  showModal2: () => {
    modal[2].classList.remove('hidden-modal');
    modal[2].classList.add('show-modal');
  },

  hiddenModal0: () => {
    modal[0].classList.remove('show-modal');
    modal[0].classList.add('hidden-modal');
  },
  hiddenModal1: () => {
    modal[1].classList.remove('show-modal');
    modal[1].classList.add('hidden-modal');
  },
  hiddenModal2: () => {
    modal[2].classList.remove('show-modal');
    modal[2].classList.add('hidden-modal');
  },
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

const modalEvent = () => {
  if ('ontouchstart' in document.documentElement === true) {
    cover[0].ontouchend = () => {
      madalObj.showModal0();
    };
    modalBtn[0].ontouchend = () => {
      madalObj.hiddenModal0();
    };

    cover[1].ontouchend = () => {
      madalObj.showModal1();
    };
    modalBtn[1].ontouchend = () => {
      madalObj.hiddenModal1();
    };

    cover[2].ontouchend = () => {
      madalObj.showModal2();
    };
    modalBtn[2].ontouchend = () => {
      madalObj.hiddenModal2();
    };
  } else {
    cover[0].onclick = () => {
      madalObj.showModal0();
    };
    modalBtn[0].onclick = () => {
      madalObj.hiddenModal0();
    };

    cover[1].onclick = () => {
      madalObj.showModal1();
    };
    modalBtn[1].onclick = () => {
      madalObj.hiddenModal1();
    };

    cover[2].onclick = () => {
      madalObj.showModal2();
    };
    modalBtn[2].onclick = () => {
      madalObj.hiddenModal2();
    };
  }
};
modalEvent();

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
