import { projectForm } from "./projectForm";

export function addProject(){
    const add = document.querySelector('.add-project');
    const form = document.querySelector('.project-form');
    const input = document.getElementById('project-name-input');
    const body = document.querySelector('.project-body');
    
    add.addEventListener('click', () =>{ 
        // const count = body.childElementCount;
        input.style.display = 'grid'; 
        form.style.display = 'grid'; 
        add.style.display = 'none';
        
        input.style.gridRowStart = `${body.childElementCount - 2}`
        form.style.gridRowStart = `${body.childElementCount - 1}`
    })
}

addProject();