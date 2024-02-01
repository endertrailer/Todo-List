import {clear} from './clear-todo.js'
import {render} from './render.js'
import { createTodo } from './todo-object.js';

export function taskForm(){
    const addTask = document.querySelector('.addtask');
    const title = document.querySelector('#title');
    const addButton = document.querySelector('.add');
    const cancelButton = document.querySelector('.cancel')
    const addForm = document.querySelector('.title-form')

    addButton.addEventListener('click', () => {
        const title = document.getElementById('title');
        clear();
        render(createTodo(title.value));
        addTask.style.display = 'grid';
        addForm.style.display = 'none';
        title.style.display = 'none';
        title.value = '';
    })

    cancelButton.addEventListener('click', () => {
        addTask.style.display = 'grid';
        addForm.style.display = 'none';
        title.style.display = 'none';
        title.value = '';
    })
}
taskForm();