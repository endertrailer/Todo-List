import { addDate } from "./todo-object";

export function dateChange(){
const dates = document.querySelectorAll('.date');

for(let i = 0; i < dates.length; i++){
    dates[i].addEventListener('change', function() {
        addDate(dates[i].value, i);
    })
}
}
