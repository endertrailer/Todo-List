import clear  from './clear-todo';
import { render } from './render';
import { createTodo } from './todo-object';

export default function taskForm() {
  const addTask = document.querySelector('.addtask');
  const addButton = document.querySelector('.add');
  const cancelButton = document.querySelector('.cancel');
  const addForm = document.querySelector('.title-form');

  addButton.addEventListener('click', () => {
    const title = document.getElementById('title');

    if (title.value === '') {
      clear();
      render(createTodo('no name'));
      addTask.style.display = 'grid';
      addForm.style.display = 'none';
      title.style.display = 'none';
      title.value = '';
    } else {
      clear();
      render(createTodo(title.value));
      addTask.style.display = 'grid';
      addForm.style.display = 'none';
      title.style.display = 'none';
      title.value = '';
    }
  });

  cancelButton.addEventListener('click', () => {
    const title = document.getElementById('title');
    addTask.style.display = 'grid';
    addForm.style.display = 'none';
    title.style.display = 'none';
    title.value = '';
  });
}
