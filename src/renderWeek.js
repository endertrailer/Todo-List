import { isThisWeek } from "date-fns";


export function renderWeek(tasks){
const addTask = document.querySelector('.addtask');
const main_box = document.querySelector('.main-box');
const inbox_title = document.querySelector('.inbox-title');
addTask.style.display = 'none';
inbox_title.textContent = 'This Week';
let j = 0;

for(let i = 0; i < tasks.length; i++){
    console.log(isThisWeek(tasks[i].date));
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
    
    
    checkbox.src = '../src/images/check_box_outline_blank_FILL0_wght400_GRAD-25_opsz24.svg';
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