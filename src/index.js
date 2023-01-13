import "./style.css";
import { Todo } from "./todos";
import { todoToDom, Window } from "./addToDom";
import { Project } from "./projects";

const home = document.getElementById("home");
const todoSection = document.getElementById("todos");
const sidebar = document.getElementById("project-bar");
const titleSection = document.getElementById("titleSection");
const descriptionSection = document.getElementById("descriptionSection");
const projectArray = [];

//Creating default project for initial todos
const defaultProject = new Project("defaultProject");
defaultProject.addToDom(sidebar);

makeCurrent(defaultProject);

let currentProject = defaultProject;
let previousProject = currentProject;
let openedTodoWindow = false;

//Add event listener to blue button when clicking
const newButton = document.getElementById("add-todo");
newButton.addEventListener("click", (e) => {
  //Creating a window only if it is not opened already
  if (!openedTodoWindow) {
    const todoWindow = new Window(home, "todo-window");
    todoWindow.createWindow();
    openedTodoWindow = true;
    //Event listener, input data -> new todo item
    todoWindow.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const todo = new Todo(
        todoWindow.textInput.value,
        todoWindow.dateInput.value
      );
      //Todos will be always added to the current onscreen project
      todo.showTodo(todoSection);
      currentProject.todoArr.push(todo); //change from default to the last clicked project
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
      projectArray.push(project);
      project.addToDom(sidebar);
      //displaying todos when clicking
      makeCurrent(project);
      projectWindow.closeWindow();
      openedProjectWindow = false;
    });
  }
});
function makeCurrent(project) {
  project.element.addEventListener("click", (e) => {
    previousProject = currentProject;
    currentProject = project;
    if (previousProject != currentProject) {
      displayProject(currentProject);
      closeProject(previousProject);
      console.log(currentProject.name);
    }
  });
}

function displayProject(project) {
  //This must be placed inside a function or the object
  titleSection.appendChild(project.projectTitle);
  descriptionSection.appendChild(project.projectDescription);

  for (let i = 0; i < project.todoArr.length; i++) {
    project.todoArr[i].showTodo(todoSection);
  }
}
function closeProject(project) {
  //This must be placed inside a function or the object
  titleSection.removeChild(project.projectTitle);
  descriptionSection.removeChild(project.projectDescription);

  for (let i = 0; i < project.todoArr.length; i++) {
    project.todoArr[i].closeTodo(todoSection);
  }
}

displayProject(defaultProject);

//Make each todo object have a showTodo and closeTodo, also its dom properties will be created when the object is created(not a part of the functions) the functions will only append or "dissapend"
