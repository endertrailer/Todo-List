import { addDate } from './todo-object';

export default function dateChange() {
  const dates = document.querySelectorAll('.date');

  for (let i = 0; i < dates.length; i += 1) {
    dates[i].addEventListener('change', () => {
      addDate(dates[i].value, i);
    });
  }
}
