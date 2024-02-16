import { clearProjects } from './clearProjects.js';
import { renderProject } from './renderProject.js';
import { projectObjects } from './projectObjects.js';
import { projecEventListner } from './renderProjectTodo.js';

export function projectForm(){
    const add = document.querySelector('.add-project');
    const addButton = document.querySelector('.add-project-form');
    const cancelButton = document.querySelector('.cancel-project-form')
    const form = document.querySelector('.project-form')
    addButton.addEventListener('click', () => {
        const name = document.getElementById('project-name-input');
        clearProjects();
        renderProject(projectObjects(name.value));
        projecEventListner();
        add.style.display = 'grid';
        form.style.display = 'none';
        name.style.display = 'none';
        name.value = '';
    })

    cancelButton.addEventListener('click', () => {
        const name = document.getElementById('project-name-input');
        add.style.display = 'grid';
        form.style.display = 'none';
        name.style.display = 'none';
        name.value = '';
    })
}

projectForm();