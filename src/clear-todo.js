export function clear(){
    const todo = document.querySelectorAll('.todo');
    todo.forEach(element => {
        element.remove();
    })
}