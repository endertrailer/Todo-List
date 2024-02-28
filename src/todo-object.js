let tasks = [];

// Load tasks from localStorage on script load
window.addEventListener('DOMContentLoaded', () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        tasks = storedTasks;
    }
});

export function getTasks() {
    return tasks;
}

export function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function createTodo(title) {
    if (title !== undefined) {
        tasks.push({ title: title });
        saveTasks(); // Save tasks to localStorage after modification
    }
    return tasks;
}

export function addDate(date, index) {
    tasks[index].date = date;
    saveTasks(); // Save tasks to localStorage after modification
}

export function removeObject(index) {
    tasks.splice(index, 1);
    saveTasks(); // Save tasks to localStorage after modification
}
