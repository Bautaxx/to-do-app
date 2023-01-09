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

function todoWindow(parent) {
  const window = document.createElement("div");
  window.classList.add("todo-window");

  const form = document.createElement("form");

  // create the text input
  const input = document.createElement("input");
  input.type = "text";
  input.name = "name";
  input.placeholder = "Enter todo title";

  // create the submit button
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";

  // add the input and button to the form
  form.appendChild(input);
  form.appendChild(button);

  // add the form to the DOM
  window.appendChild(form);
  parent.appendChild(window);
}

function projectToDom(project, parent) {
  const projectDom = document.createElement("h2");
  projectDom.innerText = project.name;
  parent.appendChild(projectDom);
}

export { todoToDom, projectToDom, todoWindow };
