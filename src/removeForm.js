export function removeForm(){
const projectTodoForm = document.querySelector('.project-todo-form');
const projectTodoInput = document.querySelector('#project-todo-input');
projectTodoInput.value = '';
projectTodoForm.style.display = 'none';
projectTodoInput.style.display = 'none';

const inboxForm = document.querySelector('.title-form');
const inboxInput = document.querySelector('#title')
inboxForm.style.display = 'none';
inboxInput.style.display = 'none';
inboxInput.value = '';
}