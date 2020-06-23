const valid = document.querySelector('.main__write');
const from = document.querySelector('.main__tag-form');
const input = from.querySelector('input');

const ADMIN = 'admin';

const saveValid = () => {
  localStorage.setItem(ADMIN, 'true');
  valid.style.display = 'block';
  from.style.display = 'none';
};

const validHandle = (e) => {
  e.preventDefault();
  const date = new Date();
  const min = date.getMinutes();
  const currentValue = input.value;
  if (currentValue === `${min}${107}호`) {
    saveValid();
  } else {
  }
};

const Valid = () => {
  from.addEventListener('submit', validHandle);
};

Valid();
