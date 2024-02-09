let tasks = [{title: 'pizza'}, {title: 'zippa'}, {title: 'typing practice two hours'}];
export function createTodo(title){
    
    if(title !== undefined){
        
        tasks.push({title: title});
    }
    return tasks;
}

export function addDate(date, index){
    tasks[index].date = date;
    console.log(tasks);
}