// eslint-disable-next-line import/no-cycle
import { render } from './render';
import { createTodo, removeObject } from './todo-object';
import clear  from './clear-todo';

export default function removeTodo() {
  const checkbox = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('click', () => {
      removeObject(i);
      clear();
      render(createTodo());
    });
  }
}
