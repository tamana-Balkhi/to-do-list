/*const arrLists = [
  {
    id: 1,
    description: 'Complete daily Task',
    completed: true,
  },

  {
    id: 2,
    description: 'Complete daily project',
    completed: true,
  },

  {
    id: 3,
    description: 'Complete weekly restrospectives',
    completed: true,
  },

  {
    id: 4,
    description: 'Complete monthly capestone',
    completed: true,
  },

];

export default arrLists;*/
class CreateList {
  constructor(description, id, completed) {
    this.description = description;
    this.id = id;
    this.completed = completed;
  }
}

export default CreateList;