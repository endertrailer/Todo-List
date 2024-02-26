import { renderProjectTodo } from "./renderProjectTodo";
import { getActiveProject, projectArray } from "./projectObjects";
import { clear } from "./clear-todo";
export function addProjectTodo(){
    const form = document.querySelector('.project-todo-form');
    const addTask = document.querySelector('.add-project-task');
    const add = document.querySelector('.add-project-todo')
    const cancel = document.querySelector('.cancel-project-todo');
     add.addEventListener('click', () => {
        const input = document.getElementById('project-todo-input');
        
        if(input.value === ''){
        clear();    
        renderProjectTodo(projectArray(getActiveProject()));
        addTask.style.display = 'grid';
        form.style.display = 'none';
        input.style.display = 'none';
        input.value = '';
        }
        
        else{
        clear();    
        renderProjectTodo(projectArray(getActiveProject(),input.value));
        addTask.style.display = 'grid';
        form.style.display = 'none';
        input.style.display = 'none';
        input.value = '';
    }
    })

    cancel.addEventListener('click', () => {
        const input = document.getElementById('project-todo-input');
        addTask.style.display = 'grid';
        form.style.display = 'none';
        input.style.display = 'none';
        input.value = '';
    })
}

export function addProjectTask(){
    const addTask = document.querySelector('.add-project-task');
    const title = document.getElementById('project-todo-input');
    const addForm = document.querySelector('.project-todo-form');

    addTask.addEventListener("click", () => {
        addTask.style.display = 'none';
         addForm.style.display = 'grid';
         title.style.display = 'grid';
})

}
addProjectTask();