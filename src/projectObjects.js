let projects = [{ projectName: 'Daily tasks' }, { projectName: 'Art' }, { projectName: 'Homeworks' }];
let projectTodo = [[{ title: 'write' }, { title: 'eat' }, { title: 'drink' }], [{ title: 'Draw' }, { title: 'Color' }], [{ title: 'Sen' }, { title: 'Mic' }, { title: 'Dcc' }]];

const storedProjects = JSON.parse(localStorage.getItem('projects'));
const storedProjectTodo = JSON.parse(localStorage.getItem('projectTodo'));
if (storedProjects) {
  projects = storedProjects;
}

if (storedProjectTodo) {
  projectTodo = storedProjectTodo;
}

let activeProject;
export function projectObjects(name) {
  if (name !== undefined && name !== null && name !== '') {
    projects.push({ projectName: name });
    projectTodo.push([]);
  }
  localStorage.setItem('projects', JSON.stringify(projects));
  return projects;
}

export function projectArray(index, title) {
  activeProject = index;
  if (title !== '' && title !== undefined) {
    projectTodo[index].push({ title });
  }
  localStorage.setItem('projectTodo', JSON.stringify(projectTodo));
  return projectTodo[index];
}

export function getActiveProject() {
  return activeProject;
}

export function projectTodoDate(index, date) {
  projectTodo[activeProject][index].date = date;
  localStorage.setItem('projectTodo', JSON.stringify(projectTodo));
}

export function removeProjectIndex(index) {
  projects.splice(index, 1);
  projectTodo.splice(index, 1);
  if (index >= activeProject) {
    activeProject -= 1;
  }
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function removeProjectTodoIndex(index) {
  projectTodo[activeProject].splice(index, 1);
  localStorage.setItem('projectTodo', JSON.stringify(projectTodo));
}
