let projects = [{projectName:'Daily tasks'}, {projectName:'Art'}, {projectName:'Homeworks'}];
let projectTodo = [[{title:'write'},{title:'eat'}, {title:'drink'}],[{title:'Draw'},{title:'Color'}], [{title:'Sen'},{title:'Mic'}, {title:'Dcc'}]];
let activeProject;
export function projectObjects(name){
    if(name !== undefined && name !== null && name !== ''){
        projects.push({projectName: name});
        projectTodo.push([])
    }
    return projects;
}

export function projectArray(index, title){
    activeProject = index;
    if(title !== '' && title !== undefined){
        projectTodo[index].push({title: title})
    }
    return projectTodo[index]; 
}

export function getActiveProject(){
    return activeProject;
}

export function projectTodoDate(index,date){
    projectTodo[activeProject][index].date = date;
}

export function removeProjectIndex(index){
    projects.splice(index,1);
    projectTodo.splice(index,1);
    if(index >= activeProject){
        activeProject--;
    }
}

export function removeProjectTodoIndex(index){
    projectTodo[activeProject].splice(index,1);
}

