'use stript';

const todoForm = document.querySelector('.js-todoForm'),
  todoInput = todoForm.querySelector('input'),
  todoList = document.querySelector('.js-todoList');

const TODOS_LS = 'todos';
const NAME = 'currentUser';
let todos = [];

const name = localStorage.getItem(NAME);
if (name === null) {
  todoForm.innerHTML = '';
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

const saveTodos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
};

const deleteTodo = (e) => {
  const li = e.path[3];
  todoList.removeChild(li);

  const cleanTodos = todos.filter((todo) => todo.id !== parseInt(li.id));
  todos = cleanTodos;

  saveTodos();
};

const doneTodos = (e) => {
  const todoId = parseInt(e.target.id.substring(3, 4));
  const todoChecked = e.target.checked;

  const sameId = todos.find((idx) => idx.id === todoId);
  sameId.done = todoChecked;
  todos.slice(sameId.id, sameId);

  saveTodos();
};

const paintTodos = (text, valid) => {
  const li = document.createElement('li');
  const divCol1 = document.createElement('div');
  const divCol2 = document.createElement('div');
  const delBtn = document.createElement('button');
  const inputCheckBox = document.createElement('input');
  const labelCheckBox = document.createElement('label');

  li.className = 'todoList__todo';
  divCol1.className = 'todoList__column';
  divCol2.className = 'todoList__column';

  const newId = todos.length + 1;
  const newIdCbx = `cbx${newId}`;

  li.id = newId;

  inputCheckBox.className = 'todoList__cbx';
  inputCheckBox.id = newIdCbx;
  inputCheckBox.type = 'checkbox';
  inputCheckBox.style = 'display: none';
  inputCheckBox.checked = valid;

  inputCheckBox.addEventListener('click', doneTodos);

  labelCheckBox.className = 'todoList__cnt';
  labelCheckBox.setAttribute('for', newIdCbx);

  const fstSpan = document.createElement('span');
  const scdSpan = document.createElement('span');

  fstSpan.innerHTML = `<svg width="12px" height="9px" viewbox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg>`;
  scdSpan.innerText = text;

  labelCheckBox.appendChild(fstSpan);
  labelCheckBox.appendChild(scdSpan);

  delBtn.className = 'todoList-del';
  delBtn.innerHTML = `<i class="fas fa-times"></i>`;
  const faDelBtn = delBtn.querySelector('.fa-times');
  faDelBtn.addEventListener('click', deleteTodo);

  todoList.appendChild(li);

  li.appendChild(divCol1);
  divCol1.appendChild(inputCheckBox);
  divCol1.appendChild(labelCheckBox);

  li.appendChild(divCol2);
  divCol2.appendChild(delBtn);

  const todoObj = {
    id: newId,
    text: text,
    done: valid,
  };

  todos.push(todoObj);
  saveTodos();
};

const handleSubmitTodos = (e) => {
  e.preventDefault();
  const currentValue = todoInput.value;
  paintTodos(currentValue);
  todoInput.value = '';
};

const loadTodos = () => {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  const validTodos = JSON.parse(loadedTodos)[0];
  if (validTodos !== undefined) {
    const parseTodos = JSON.parse(loadedTodos);
    parseTodos.forEach((todo) => {
      paintTodos(todo.text, todo.done);
    });
  }
};

const Todo = () => {
  loadTodos();
  todoForm.addEventListener('submit', handleSubmitTodos);
};

Todo();
