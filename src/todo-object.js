let tasks = [{title: 'pizza'}, {title: 'zippa'}, {title: 'typing practice two hours'}];
export function createTodo(title){
    
    if(title !== undefined){
        
        tasks.push({title: title});
    }
    console.log(tasks);
    return tasks;
}