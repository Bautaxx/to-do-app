function Project(name) {
  this.name = name;
  this.todoArr = [];
  this.projectTitle = document.createElement("h1");
  this.projectTitle.innerText = this.name;
  this.projectDescription = document.createElement("p");
  this.projectDescription.innerText =
    "This will be the default description for now";
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
