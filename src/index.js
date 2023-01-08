import "./style.css";
import { Todo } from "./todos";
import { todoToDom } from "./addToDom";

//Code to display how todos behave on screen
/*const parent = document.getElementById("todos");
for (let i = 0; i < 9; i++) {
  let objectx = new Todo(
    "This is a random to do",
    "9/11/22",
    "9/11/22",
    "Very Important"
  );
  todoToDom(objectx, todos);
}
*/

function displayProject(project) {
  for (let i = 0; i < project.todoArr.length; i++) {
    todoToDom(project.todoArr[i], parent);
  }
}
