import { projectTodoDate } from './projectObjects';

export default function projectTodoDateEvent() {
  const date = document.querySelectorAll('.date');
  for (let i = 0; i < date.length; i += 1) {
    date[i].addEventListener('change', () => {
      projectTodoDate(i, date[i].value);
    });
  }
}
