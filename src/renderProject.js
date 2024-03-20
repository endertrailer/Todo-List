// eslint-disable-next-line import/no-cycle
import { removeProject } from './removeProject';
import { projecEventListner } from './renderProjectTodo';
import assept from './images/assept-document.svg';
import smallCrossImg from './images/cross-small.svg';


export default function renderProject(projects) {
  const projectBody = document.querySelector('.project-body');
  const addProject = document.querySelector('.add-project');
  for (let i = 0; i < projects.length; i += 1) {
    const box = document.createElement('div');
    box.classList.add('project-box');

    const inbox = document.createElement('img');
    inbox.src = assept;
    inbox.classList.add('inbox');

    const name = document.createElement('div');
    name.classList.add('project-name');
    name.textContent = projects[i].projectName;

    const removeImg = document.createElement('img');
    removeImg.classList.add('project-remove');
    removeImg.src = smallCrossImg;
    box.appendChild(inbox);
    box.appendChild(name);
    box.appendChild(removeImg);
    projectBody.appendChild(box);
  }
  removeProject();
  projecEventListner();
  // removeColor();
  addProject.style.gridRowStart = `${projectBody.childElementCount - 2}`;
  const addTask = document.querySelector('.add-project-task');
  const title = document.getElementById('project-todo-input');
  const addForm = document.querySelector('.project-todo-form');
  
  addTask.addEventListener('click', () => {
    title.style.display = 'grid';
    addForm.style.display = 'grid';
    addTask.style.display = 'none';
  });
}
