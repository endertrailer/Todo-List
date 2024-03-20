// import { taskForm } from './task-form';

export default function addtask() {
  const addTask = document.querySelector('.addtask');
  const title = document.querySelector('#title');
  const addForm = document.querySelector('.title-form');

  addTask.addEventListener('click', () => {
    // addTask.style.gridRowStart = `${main_box.childElementCount + 1}`;
    title.style.display = 'grid';
    addForm.style.display = 'grid';
    addTask.style.display = 'none';
  });
}
addtask();
