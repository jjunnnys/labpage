'use stript';
const nameForm = document.querySelector('.js-nameForm'),
  nameInput = nameForm.querySelector('input'),
  greeting = document.querySelector('.js-greetings');
const mNameForm = document.querySelector('.js-mNameForm'),
  mNameInput = mNameForm.querySelector('input'),
  mGreeting = document.querySelector('.js-mGreetings');
const todoBox = document.querySelector('.momentum__main-box');

const USER_LS = 'currentUser',
  SHOWING_CN = 'js-showing',
  RESIZE_BOX = 'js-resize',
  TODOBOX = 'js-todoBoxSize';

function paintGreeting(text) {
  nameForm.classList.remove(SHOWING_CN);
  mNameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  mGreeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `<p>안녕하세요. <span style="color:#dee2e6">${text}</span>님</p>`;
  mGreeting.innerHTML = `<p>안녕하세요. <span style="color:#dee2e6">${text}</span>님</p>`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit() {
  const currentValue = nameInput.value;
  const mCurrentValue = mNameInput.value;
  paintGreeting(currentValue || mCurrentValue);
  saveName(currentValue || mCurrentValue);
}

function askForName() {
  nameForm.classList.add(SHOWING_CN);
  mNameForm.classList.add(SHOWING_CN);
  nameForm.addEventListener('submit', handleSubmit);
  mNameForm.addEventListener('submit', handleSubmit);
}

function resizeBox() {
  todoBox.classList.add(RESIZE_BOX);
  todoBox.classList.remove(TODOBOX);
}

function nonResizeBox() {
  todoBox.classList.remove(RESIZE_BOX);
  todoBox.classList.add(TODOBOX);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    resizeBox();
    askForName();
  } else {
    nonResizeBox();
    paintGreeting(currentUser);
    nameForm.innerHTML = null;
    mNameForm.innerHTML = null;
    greeting.style = '';
    mGreeting.style = '';
  }
}

const Greeting = () => {
  loadName();
};

Greeting();
