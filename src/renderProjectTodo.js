import { render } from "./render";
import { projectArray } from "./projectObjects";
import {clear} from './clear-todo'
import { renderProject } from "./renderProject";
import { removeForm } from "./removeForm.js";
import { removeProjectTodo } from "./removeProject.js";
import { projectTodoDateEvent } from "./projectTodoDate.js";
export function projecEventListner(){
const project = document.querySelectorAll('.project-box');
const inbox_title = document.querySelector('.inbox-title');
for(let i = 0; i < project.length; i++){
    project[i].addEventListener('click', () =>{
        inbox_title.textContent = project[i].textContent;
        clear();
        renderProjectTodo(projectArray(i));
        removeForm();
    })
}
}

export function renderProjectTodo(tasks){
    const main_box = document.querySelector('.main-box');
    const addTask = document.querySelector('.addtask')
    addTask.style.display = 'none';
    const addProjectTask = document.querySelector('.add-project-task');
    if(tasks.length){

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
    }}
    removeProjectTodo();
    addProjectTask.style.display = 'grid';
    projectTodoDateEvent();
}