export function clearProjects(){
const projects = document.querySelectorAll('.project-box');
projects.forEach(element => {
    element.remove();
})
}