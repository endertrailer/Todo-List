let tasks = [{title: 'walking'}, {title: 'typing'}, {title: 'studying'}];
let storedTasks = localStorage.getItem('tasks');
if(storedTasks){
    tasks = storedTasks;
}
export function createTodo(title){
    
    if(title !== undefined){
        
        tasks.push({title: title});
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
}

export function addDate(date, index){
    tasks[index].date = date;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function removeObject(index){
    tasks.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

