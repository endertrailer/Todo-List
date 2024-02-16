import { render } from "./render.js";
import {addtask} from './addtask.js';
import {clear} from './clear-todo.js'
import { dateChange } from './dates.js';
import { createTodo } from './todo-object.js';
import { renderToday } from "./renderToday.js";
import { renderWeek } from "./renderWeek.js";
import { projectObjects } from "./projectObjects.js";
import { renderProject } from "./renderProject.js";
import { clearProjects } from "./clearProjects.js";
import { addProject } from "./addProject.js";
import { renderProjectTodo } from "./renderProjectTodo.js";
import { projecEventListner } from "./renderProjectTodo.js";
const week = document.getElementById('week');
const today = document.getElementById('today');
const inbox = document.getElementById('inboxbtn');
today.addEventListener('click', () => {
    clear();
    renderToday(createTodo());
})

inbox.addEventListener('click', () => {
    clear();
    render(createTodo());
    dateChange();
})

week.addEventListener('click', () => {
    clear();
    renderWeek(createTodo());
    dateChange();
})

render(createTodo());
dateChange();

clearProjects();
renderProject(projectObjects());
addProject();
projecEventListner();