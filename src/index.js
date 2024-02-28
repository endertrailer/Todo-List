import { render } from "./render.js";
import {addtask} from './addtask.js';
import {clear} from './clear-todo.js'
import { dateChange } from './dates.js';
import { createTodo } from './todo-object.js';
import { renderToday, renderWeek } from "./render.js";
import { projectObjects } from "./projectObjects.js";
import { renderProject } from "./renderProject.js";
import { clearProjects } from "./clearProjects.js";
import { addProject } from "./addProject.js";
import { renderProjectTodo } from "./renderProjectTodo.js";
import { projecEventListner } from "./renderProjectTodo.js";
import { addProjectTodo } from "./addProjectTodo.js";
import './style.css';
import envelopeImg from './images/envelope (1).svg';
import calenderImg from './images/calendar.svg';
import calenderDayImg from './images/calendar-day.svg';
import plusImg from './images/plus.svg';

const inboxArray = document.querySelectorAll('.inbox');
inboxArray[0].src = envelopeImg;
inboxArray[1].src = calenderImg;
inboxArray[2].src = calenderDayImg;

const projectImg = document.querySelector('.project-img');
projectImg.src = plusImg;

const addArray = document.querySelectorAll('.addimg');
for(let i = 0; i < addArray.length; i++){
    addArray[i].src = plusImg;
}
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
addProjectTodo()