import clearProjects from './clearProjects';
import renderProject  from './renderProject';
import { projectObjects } from './projectObjects';
import { projecEventListner } from './renderProjectTodo';

export default function projectForm() {
  const add = document.querySelector('.add-project');
  const addButton = document.querySelector('.add-project-form');
  const cancelButton = document.querySelector('.cancel-project-form');
  const form = document.querySelector('.project-form');
  addButton.addEventListener('click', () => {
    const name = document.getElementById('project-name-input');
    clearProjects();
    renderProject(projectObjects(name.value));
    projecEventListner();
    add.style.display = 'grid';
    form.style.display = 'none';
    name.style.display = 'none';
    name.value = '';
  });

  cancelButton.addEventListener('click', () => {
    const name = document.getElementById('project-name-input');
    add.style.display = 'grid';
    form.style.display = 'none';
    name.style.display = 'none';
    name.value = '';
  });
}

// projectForm();
