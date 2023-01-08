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

function projectToDom(project, parent) {
  const projectDom = document.createElement("h2");
  projectDom.innerText = project.name;
  parent.appendChild(projectDom);
}

export { todoToDom, projectToDom };
