/* eslint-disable import/no-cycle */
import clearProjects from './clearProjects';
import {
  projectObjects, removeProjectIndex, removeProjectTodoIndex, getActiveProject, projectArray,
} from './projectObjects';
import  renderProject  from './renderProject';
import { renderProjectTodo } from './renderProjectTodo';
import clear from './clear-todo';

export function removeProject() {
  const crossImg = document.querySelectorAll('.project-remove');
  for (let i = 0; i < crossImg.length; i += 1) {
    crossImg[i].addEventListener('click', (event) => {
      event.stopPropagation();
      removeProjectIndex(i);
      clearProjects();
      renderProject(projectObjects());
    });
  }
}

export function removeProjectTodo() {
  const box = document.querySelectorAll('.checkbox');
  for (let i = 0; i < box.length; i += 1) {
    box[i].addEventListener('click', () => {
      clear();
      removeProjectTodoIndex(i);
      renderProjectTodo(projectArray(getActiveProject()));
    });
  }
}
