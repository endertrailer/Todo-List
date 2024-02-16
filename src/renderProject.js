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

        box.appendChild(inbox);
        box.appendChild(name);
        projectBody.appendChild(box);
    }
    addProject.style.gridRowStart = `${projectBody.childElementCount - 2}`;
}

