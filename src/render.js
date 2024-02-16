import { dateChange } from "./dates.js";

export function render(tasks){
    
// const taskManager = document.querySelector('.taskmanager')
const main_box = document.querySelector('.main-box');
const inbox_title = document.querySelector('.inbox-title');
const addTask = document.querySelector('.addtask');
const addProjectTask = document.querySelector('.add-project-task');
addProjectTask.style.display = 'none';
addTask.style.display = 'grid';
inbox_title.textContent = 'Inbox';
for(let i = 0; i < tasks.length; i++){
    console.log(tasks);
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
    todo.style.gridRowStart = `${i + 2}`;
    main_box.appendChild(todo);
    }
    addTask.style.gridRowStart = `${tasks.length + 2}`
    dateChange();
}
// render(createTodo());
// 