function Todo(title, priority, date, status) {
  //Normal Properties
  this.title = title;
  this.priority = priority;
  this.date = date;
  this.status = status;

  //Dom elements of todo
  this.titleElement = document.createElement("div");
  this.dateElement = document.createElement("div");
  this.statusElement = document.createElement("input");
  this.todoItem = document.createElement("div");

  this.titleElement.innerText = this.title;
  this.titleElement.classList.add("toDo-title");

  this.dateElement.innerText = this.date;
  this.dateElement.classList.add("toDo-date");

  this.statusElement.classList.add("toDo-status");
  this.statusElement.type = "checkbox";

  this.todoItem.classList.add("todo");

  this.todoItem.appendChild(this.titleElement);
  this.todoItem.appendChild(this.dateElement);
  this.todoItem.appendChild(this.statusElement);

  this.showTodo = function (parent) {
    parent.appendChild(this.todoItem);
  };

  this.closeTodo = function (parent) {
    parent.removeChild(this.todoItem);
  };
}

export { Todo };
