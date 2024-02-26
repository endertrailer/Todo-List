import { projectTodoDate } from "./projectObjects";

export function projectTodoDateEvent(){
    const date = document.querySelectorAll('.date');
    for(let i = 0; i < date.length; i++){
        date[i].addEventListener('change', () =>{
            projectTodoDate(i, date[i].value);
        })
    }
}