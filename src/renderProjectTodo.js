import { projectArray } from './projectObjects';
import clear from './clear-todo';
import removeForm  from './removeForm';
// eslint-disable-next-line import/no-cycle
import { removeProjectTodo } from './removeProject';
import projectTodoDateEvent  from './projectTodoDate';
import checkboxImg from './images/check_box_outline_blank_FILL0_wght400_GRAD-25_opsz24.svg';
import removeColor from './removeColor';

export function renderProjectTodo(tasks) {
  const mainBox = document.querySelector('.main-box');
  const addTask = document.querySelector('.addtask');
  addTask.style.display = 'none';
  const addProjectTask = document.querySelector('.add-project-task');
  if (tasks) {
    for (let i = 0; i < tasks.length; i += 1) {
      const todo = document.createElement('div');
      todo.classList.add('todo');
      const title = document.createElement('div');
      title.classList.add('todo-title');
      title.textContent = tasks[i].title;
      const dateBox = document.createElement('div');
      dateBox.classList.add('date-box');
      const dateInput = document.createElement('input');
      dateInput.setAttribute('type', 'date');
      dateInput.setAttribute('class', 'date');
      dateInput.value = tasks[i].date;

      const checkbox = document.createElement('img');
      checkbox.classList.add('checkbox');

      checkbox.src = checkboxImg;
      dateBox.appendChild(dateInput);
      todo.appendChild(checkbox);
      todo.appendChild(title);
      todo.appendChild(dateBox);
      todo.style.gridRowStart = `${i + 2}`;
      mainBox.appendChild(todo);
    }
  }
  removeProjectTodo();
  addProjectTask.style.display = 'grid';
  projectTodoDateEvent();
}

export function projecEventListner() {
  const project = document.querySelectorAll('.project-box');
  const inboxTitle = document.querySelector('.inbox-title');
  for (let i = 0; i < project.length; i += 1) {
    project[i].addEventListener('click', () => {
      inboxTitle.textContent = project[i].textContent;
      clear();
      renderProjectTodo(projectArray(i));
      removeForm();
      removeColor();
      project[i].classList.add('projectClicked');
    });
  }
}
