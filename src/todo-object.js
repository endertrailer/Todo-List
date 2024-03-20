let tasks = [{ title: 'walking' }, { title: 'typing' }, { title: 'studying' }];
const storedTasks = JSON.parse(localStorage.getItem('task'));
if (storedTasks) {
  tasks = storedTasks;
}
export function createTodo(title) {
  if (title !== undefined) {
    tasks.push({ title });
  }
  localStorage.setItem('task', JSON.stringify(tasks));
  return tasks;
}

export function addDate(date, index) {
  tasks[index].date = date;
  localStorage.setItem('task', JSON.stringify(tasks));
}

export function removeObject(index) {
  tasks.splice(index, 1);
  localStorage.setItem('task', JSON.stringify(tasks));
}
