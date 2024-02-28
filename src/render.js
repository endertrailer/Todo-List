import { dateChange } from "./dates.js";
import { removeForm } from "./removeForm.js";
import { isThisWeek } from "date-fns";
import { removeTodo } from "./removeTodo.js";
import { format } from 'date-fns';
import checkboxImg from './images/check_box_outline_blank_FILL0_wght400_GRAD-25_opsz24.svg';
export function render(tasks){
    

const main_box = document.querySelector('.main-box');
const inbox_title = document.querySelector('.inbox-title');
const addTask = document.querySelector('.addtask');
const addProjectTask = document.querySelector('.add-project-task');
removeForm();

addProjectTask.style.display = 'none';
addTask.style.display = 'grid';
inbox_title.textContent = 'Inbox';
for(let i = 0; i < tasks.length; i++){
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const title = document.createElement('div');
    title.classList.add('todo-title');
    title.textContent = tasks[i].title;
    const date_box = document.createElement('div');
    date_box.classList.add('date-box');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('class', 'date');
    dateInput.value = tasks[i].date;

    const checkbox = document.createElement('img');
    checkbox.classList.add('checkbox');
    
    
    checkbox.src = checkboxImg;
    date_box.appendChild(dateInput);
    todo.appendChild(checkbox); 
    todo.appendChild(title);
    todo.appendChild(date_box);
    todo.style.gridRowStart = `${i + 2}`;
    main_box.appendChild(todo);
    }
    addTask.style.gridRowStart = `${tasks.length + 2}`
    dateChange();
    removeTodo();
}

export function renderToday(tasks){
const addTask = document.querySelector('.addtask');
const currentDate = new Date();
const formattedDate = format(currentDate, 'yyyy-MM-dd');
const main_box = document.querySelector('.main-box');
const inbox_title = document.querySelector('.inbox-title');
const addProjectTask = document.querySelector('.add-project-task');
addProjectTask.style.display = 'none';
addTask.style.display = 'none';
inbox_title.textContent = 'Today';
removeForm();
let j = 0;

for(let i = 0; i < tasks.length; i++){
    if(tasks[i].date === formattedDate){
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const title = document.createElement('div');
    title.classList.add('todo-title');
    title.textContent = tasks[i].title;
    const date_box = document.createElement('div');
    date_box.classList.add('date-box');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('class', 'date');
    dateInput.value = tasks[i].date;

    const checkbox = document.createElement('img');
    checkbox.classList.add('checkbox');
    
    
    checkbox.src = checkboxImg;
    date_box.appendChild(dateInput);
    todo.appendChild(checkbox); 
    todo.appendChild(title);
    todo.appendChild(date_box);
    todo.style.gridRowStart = `${j + 2}`;
    main_box.appendChild(todo);
    j++;
    }
  }
}

export function renderWeek(tasks){
const addTask = document.querySelector('.addtask');
const main_box = document.querySelector('.main-box');
const inbox_title = document.querySelector('.inbox-title');
const addProjectTask = document.querySelector('.add-project-task');
addProjectTask.style.display = 'none';
addTask.style.display = 'none';
inbox_title.textContent = 'This Week';
removeForm();
let j = 0;

for(let i = 0; i < tasks.length; i++){
    if(isThisWeek(tasks[i].date)) {
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const title = document.createElement('div');
    title.classList.add('todo-title');
    title.textContent = tasks[i].title;
    const date_box = document.createElement('div');
    date_box.classList.add('date-box');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('class', 'date');
    dateInput.value = tasks[i].date;

    const checkbox = document.createElement('img');
    checkbox.classList.add('checkbox');
    
    
    checkbox.src = checkboxImg;
    date_box.appendChild(dateInput);
    todo.appendChild(checkbox); 
    todo.appendChild(title);
    todo.appendChild(date_box);
    todo.style.gridRowStart = `${j + 2}`;
    main_box.appendChild(todo);
    j++;
        }
    }
}
