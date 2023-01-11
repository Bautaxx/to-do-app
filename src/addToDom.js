//Window for prompting input, different parents and class depending on todo - project
function Window(parent, className) {
  this.window = document.createElement("div");
  this.form = document.createElement("form");
  this.input = document.createElement("input");
  this.button = document.createElement("button");
  this.createWindow = function () {
    this.window.classList.add(className);

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
    this.windowOpened = true;
  };
  this.closeWindow = function () {
    parent.removeChild(this.window);
  };
}

export { Window };
