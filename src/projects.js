function Project(name) {
  this.name = name;
  this.todoArr = [];
  this.addToProject = function (todo) {
    this.todoArr.push(todo);
  };
}

export { Project };
