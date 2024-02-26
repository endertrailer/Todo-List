import { removeProject } from "./removeProject.js";
import { projecEventListner } from "./renderProjectTodo.js";
export function renderProject(projects){
    const projectBody = document.querySelector('.project-body');
    const addProject = document.querySelector('.add-project');
    for(let i = 0; i < projects.length; i++){
        const box = document.createElement('div')
        box.classList.add('project-box');
        
        const inbox = document.createElement('img');
        inbox.src = '../src/images/assept-document.svg';
        inbox.classList.add('inbox')

        const name = document.createElement('div');
        name.classList.add('project-name');
        name.textContent = projects[i].projectName;

        const removeImg = document.createElement('img');
        removeImg.classList.add('project-remove');
        removeImg.src = '../src/images/cross-small.svg';
        box.appendChild(inbox);
        box.appendChild(name);
        box.appendChild(removeImg)
        projectBody.appendChild(box);
    }
    removeProject();
    projecEventListner();
addProject.style.gridRowStart = `${projectBody.childElementCount - 2}`;
const addTask = document.querySelector('.add-project-task');
const title = document.getElementById('project-todo-input');
const addForm = document.querySelector('.project-todo-form');

addTask.addEventListener("click", () => {
    // addTask.style.gridRowStart = `${main_box.childElementCount + 1}`;
    title.style.display = 'grid';
    addForm.style.display = 'grid';
    addTask.style.display = 'none';
})
}