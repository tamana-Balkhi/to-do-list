import arrLists from './arrlists.js';

const listItem = document.getElementById('todo-lists');

const creatTasks = () => {
  arrLists.map((item) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = '...';
    paragraph.textContent = item.description;

    li.appendChild(checkbox);
    li.appendChild(paragraph);
    li.appendChild(remove);
    listItem.appendChild(li);

    return listItem;
  });
};

export default creatTasks;