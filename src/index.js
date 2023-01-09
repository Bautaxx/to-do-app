import "./style.css";
import { Todo } from "./todos";
import { todoToDom, TodoWindow } from "./addToDom";

//Code to display how todos behave on screen
const parent = document.getElementById("todos");

function displayProject(project) {
  for (let i = 0; i < project.todoArr.length; i++) {
    todoToDom(project.todoArr[i], parent);
  }
}

/*const window = new TodoWindow(parent);
window.createWindow();*/

const newButton = document.getElementById("add-todo");
newButton.addEventListener("click", (e) => {
  const window = new TodoWindow(parent);
  window.createWindow();
  //Add it after creating the window
  window.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = new Todo(window.input.value, "bla", "bla", "bla");
    todoToDom(todo, parent);
    window.closeWindow();
  });
});
