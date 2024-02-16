let projects = [{projectName:'Todo list'}, {projectName:'calculator'}, {projectName:'tic-tac-toe'}];
let projectTodo = [[{title:'write'},{title:'eat'}, {title:'drink'}],[{title:'play'},{title:'wow'}, {title:'run'}],[{title:'gale'}, {title:'hebg'}]];

export function projectObjects(name){
    if(name !== undefined && name !== null){
        
        projects.push({projectName: name});
    }
    return projects;
}

export function projectArray(index){
    console.log(projectTodo[index]);
    return projectTodo[index];
   
}