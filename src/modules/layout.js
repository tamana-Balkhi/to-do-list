import Storage from './localStorage.js';

class Lists {
  static displayToDo() {
    const todo = Storage.getLists();

    todo.forEach((todo) => {
      Lists.addLList(todo);
    });
  }

  static addLList(todo) {
    const ulContainer = document.getElementById('tbody');
    const edite = document.createElement('tr');

    edite.innerHTML = `
    <td> <input class='check'  id='checkBox' type="checkbox" /><td>
    <td><p class='paragragh'> ${todo.description}</p><td>
    <td class='id'>${todo.id}</td>
    <td><img class='kebabImg' src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png" alt="" /></td>
    <td><a href="#" class='delete'>X</a><td>
    `;
    ulContainer.appendChild(edite);
  }

  static deleteTodo(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.getElementById('todo-input').value = '';
  }
}

export default Lists;