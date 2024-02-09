import { render } from "./render.js";
import {addtask} from './addtask.js';
import {clear} from './clear-todo.js'
import { dateChange } from './dates.js';
import { createTodo } from './todo-object.js';
import { renderToday } from "./renderToday.js";
import { renderWeek } from "./renderWeek.js";


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