let tasks = [{title: 'walking'}, {title: 'typing'}, {title: 'studying'}];
export function createTodo(title){
    
    if(title !== undefined){
        
        tasks.push({title: title});
    }
    return tasks;
}

export function addDate(date, index){
    tasks[index].date = date;
}

export function removeObject(index){
    tasks.splice(index,1);
}