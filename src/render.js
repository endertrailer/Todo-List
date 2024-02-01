import {addtask} from './addtask.js';
import {clear} from './clear-todo.js'
import { createTodo } from './todo-object.js';

const addTask = document.querySelector('.addtask');

export function render(tasks){
    
// const taskManager = document.querySelector('.taskmanager')
const main_box = document.querySelector('.main-box');
for(let i = 0; i < tasks.length; i++){
    console.log(i);
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const title = document.createElement('div');
    title.classList.add('todo-title');
    title.textContent = tasks[i].title;

    const checkbox = document.createElement('img');
    checkbox.classList.add('checkbox');
    
    checkbox.src = 'file:///home/endertrailer/Downloads/check_box_outline_blank_FILL0_wght400_GRAD-25_opsz24.svg';
    todo.appendChild(checkbox); 
    todo.appendChild(title);
    todo.style.gridRowStart = `${i + 2}`;
    main_box.appendChild(todo);
    }
    addTask.style.gridRowStart = `${tasks.length + 2}`

}
render(createTodo());
