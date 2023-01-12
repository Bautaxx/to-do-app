function Project(name) {
  this.name = name;
  this.todoArr = [];
  this.element = document.createElement("button");
  this.element.classList.add("project");
  this.addToProject = function (todo) {
    this.todoArr.push(todo);
  };
  this.addToDom = function (parent) {
    this.element.innerText = this.name;
    parent.appendChild(this.element);
  };
}

export { Project };
