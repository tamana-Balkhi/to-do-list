import './style.css';
import ToDOList from './modules/layout.js';
import CreateList from './modules/arrlists.js';
import Storage from './modules/localStorage.js';

document.addEventListener('DOMContentLoaded', ToDOList.displayToDo);

document.getElementById('cleartask').addEventListener('click', () => {
  Storage.removeCompleted();
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const todoL = Storage.getLists();
  const toDoInput = document.getElementById('todo-input').value;
  const id = todoL.length + 1;
  const completed = false;

  const todo = new CreateList(toDoInput, id, completed);

  ToDOList.addLList(todo);

  Storage.addL(todo);

  ToDOList.clearField();
});

document.getElementById('cleartask').addEventListener('click', () => { });

document.getElementById('to-do-container').addEventListener('click', (e) => {
  Storage.editInput(
    e.target.parentElement.parentElement.children[4].textContent,
    e.target.parentElement,
    e.target.parentElement.parentElement,
    e.target.parentElement.parentElement.children[2].children[0],
  );

  ToDOList.deleteTodo(e.target);

  if (e.target.classList.contains('check')) {
    Storage.checkboxCompleted(e.target.parentElement.parentElement.children[4]);
    e.target.parentElement.parentElement.children[2].children[0].classList.toggle(
      'strike-through',
    );
  }

  Storage.remove(
    e.target.parentElement.previousElementSibling.previousElementSibling
      .textContent,
  );
});