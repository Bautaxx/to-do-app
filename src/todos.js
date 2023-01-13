function Todo(title, date) {
  //Normal Properties
  this.title = title;
  this.date = date;

  //Dom elements of todo
  this.titleElement = document.createElement("div");
  this.dateElement = document.createElement("div");
  this.statusElement = document.createElement("input");
  this.todoItem = document.createElement("div");

  this.titleElement.innerText = this.title;
  this.titleElement.classList.add("todo-title");

  this.dateElement.innerText = this.date;
  this.dateElement.classList.add("todo-date");

  this.statusElement.classList.add("todo-status");
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
