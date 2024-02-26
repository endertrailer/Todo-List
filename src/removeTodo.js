import { render } from "./render";
import { createTodo, removeObject } from "./todo-object";
import { clear } from "./clear-todo";
export function removeTodo(){
    const checkbox = document.querySelectorAll('.checkbox');
    for(let i = 0; i < checkbox.length; i++){
        checkbox[i].addEventListener('click', () =>{
            removeObject(i);
            clear();
            render(createTodo());
        }) 
    }
}

