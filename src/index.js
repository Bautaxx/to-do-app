import "./style.css";
import { Todo } from "./todos";
import { todoToDom, Window, projectToDom } from "./addToDom";
import { Project } from "./projects";

const todoSection = document.getElementById("todos");
const sidebar = document.getElementById("project-bar");

//Set of event listeners for the creation buttons

let openedTodoWindow = false;
//Add event listener to blue button when clicking
const newButton = document.getElementById("add-todo");
newButton.addEventListener("click", (e) => {
  //Creating a window only if it is not opened already
  if (!openedTodoWindow) {
    const todoWindow = new Window(todoSection, "todo-window");
    todoWindow.createWindow();
    openedTodoWindow = true;
    //Event listener, input data -> new todo item
    todoWindow.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const todo = new Todo(todoWindow.input.value, "bla", "bla", "bla");
      todoToDom(todo, todoSection);
      todoWindow.closeWindow();
      openedTodoWindow = false;
    });
  }
});

//Same logic as todo window but for projects
let openedProjectWindow = false;
const newProject = document.getElementById("add-project");
newProject.addEventListener("click", (e) => {
  if (!openedProjectWindow) {
    const projectWindow = new Window(sidebar, "project-window");
    projectWindow.createWindow();
    openedProjectWindow = true;
    projectWindow.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const project = new Project(projectWindow.input.value);
      projectToDom(project, sidebar);
      projectWindow.closeWindow();
      openedProjectWindow = false;
    });
  }
});

function displayProject(project) {
  for (let i = 0; i < project.todoArr.length; i++) {
    todoToDom(project.todoArr[i], todoSection);
  }
}
