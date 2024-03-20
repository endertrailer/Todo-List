import { render, renderToday, renderWeek } from './render';
import clear from './clear-todo';
import dateChange from './dates';
import taskForm from './task-form';
import { createTodo } from './todo-object';
import { projectObjects } from './projectObjects';
import renderProject from './renderProject';
import clearProjects from './clearProjects';
import addProject from './addProject';
import { projecEventListner } from './renderProjectTodo';
import { addProjectTodo } from './addProjectTodo';
import './style.css';
import envelopeImg from './images/envelope (1).svg';
import calenderImg from './images/calendar.svg';
import calenderDayImg from './images/calendar-day.svg';
import plusImg from './images/plus.svg';
import addtask from './addtask';
import removeColor from './removeColor';

const inboxArray = document.querySelectorAll('.inbox');
inboxArray[0].src = envelopeImg;
inboxArray[1].src = calenderImg;
inboxArray[2].src = calenderDayImg;

const projectImg = document.querySelector('.project-img');
projectImg.src = plusImg;

const addArray = document.querySelectorAll('.addimg');
for (let i = 0; i < addArray.length; i += 1) {
  addArray[i].src = plusImg;
}
const week = document.getElementById('week');
const today = document.getElementById('today');
const inbox = document.getElementById('inboxbtn');

today.addEventListener('click', () => {
  removeColor();
  today.classList.add('clicked');
  clear();
  renderToday(createTodo());
});

inbox.addEventListener('click', () => {
  removeColor();
  clear();
  render(createTodo());
  dateChange();
});

week.addEventListener('click', () => {
  removeColor();
  week.classList.add('clicked');
  clear();
  renderWeek(createTodo());
  dateChange();
});

addtask();
taskForm();
render(createTodo());
dateChange();

clearProjects();
renderProject(projectObjects());
addProject();
projecEventListner();
addProjectTodo();
