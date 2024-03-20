import { isThisWeek, format } from 'date-fns';
import dateChange from './dates';
import  removeForm  from './removeForm';
// eslint-disable-next-line import/no-cycle
import removeTodo  from './removeTodo';
import checkboxImg from './images/check_box_outline_blank_FILL0_wght400_GRAD-25_opsz24.svg';

export function render(tasks) {
  const mainBox = document.querySelector('.main-box');
  const inboxTitle = document.querySelector('.inbox-title');
  const addTask = document.querySelector('.addtask');
  const addProjectTask = document.querySelector('.add-project-task');
  const inbox = document.getElementById('inboxbtn');
  inbox.classList.add('clicked');
  removeForm();

  addProjectTask.style.display = 'none';
  addTask.style.display = 'grid';
  inboxTitle.textContent = 'Inbox';
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
  addTask.style.gridRowStart = `${tasks.length + 2}`;
  dateChange();
  removeTodo();
}

export function renderToday(tasks) {
  const addTask = document.querySelector('.addtask');
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd');
  const mainBox = document.querySelector('.main-box');
  const inboxTitle = document.querySelector('.inbox-title');
  const addProjectTask = document.querySelector('.add-project-task');
  addProjectTask.style.display = 'none';
  addTask.style.display = 'none';
  inboxTitle.textContent = 'Today';
  removeForm();
  let j = 0;

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].date === formattedDate) {
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
      todo.style.gridRowStart = `${j + 2}`;
      mainBox.appendChild(todo);
      j += 1;
    }
  }
}

export function renderWeek(tasks) {
  const addTask = document.querySelector('.addtask');
  const mainBox = document.querySelector('.main-box');
  const inboxTitle = document.querySelector('.inbox-title');
  const addProjectTask = document.querySelector('.add-project-task');
  addProjectTask.style.display = 'none';
  addTask.style.display = 'none';
  inboxTitle.textContent = 'This Week';
  removeForm();
  let j = 0;

  for (let i = 0; i < tasks.length; i += 1) {
    if (isThisWeek(tasks[i].date)) {
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
      todo.style.gridRowStart = `${j + 2}`;
      mainBox.appendChild(todo);
      j += 1;
    }
  }
}
