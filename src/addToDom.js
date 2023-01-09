function todoToDom(todo, parent) {
  const title = document.createElement("div");
  title.innerText = todo.title;
  title.classList.add("toDo-title");

  const date = document.createElement("div");
  date.innerText = todo.date;
  date.classList.add("toDo-date");

  const status = document.createElement("input");
  status.classList.add("toDo-status");
  status.type = "checkbox";

  const todoItem = document.createElement("div");
  todoItem.classList.add("todo");

  todoItem.appendChild(title);
  todoItem.appendChild(date);
  todoItem.appendChild(status);

  parent.appendChild(todoItem);
}

//Todo window will be an object to access the form properties once the window is out
function TodoWindow(parent) {
  this.window = document.createElement("div");
  this.form = document.createElement("form");
  this.input = document.createElement("input");
  this.button = document.createElement("button");
  this.createWindow = function () {
    this.window.classList.add("todo-window"); //Styling class

    // create the text input
    this.input.type = "text";
    this.input.name = "name";
    this.input.placeholder = "Enter todo title";

    // create the submit button
    this.button.type = "submit";
    this.button.textContent = "Submit";

    // add the input and button to the form
    this.form.appendChild(this.input);
    this.form.appendChild(this.button);

    // add the form to the DOM
    this.window.appendChild(this.form);
    parent.appendChild(this.window);
  };
  this.closeWindow = function () {
    parent.removeChild(this.window);
  };
}

function projectToDom(project, parent) {
  const projectDom = document.createElement("h2");
  projectDom.innerText = project.name;
  parent.appendChild(projectDom);
}

export { todoToDom, projectToDom, TodoWindow };
