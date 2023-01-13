//Window for prompting input, different parents and class depending on todo - project
function Window(parent, className) {
  this.window = document.createElement("div");
  this.form = document.createElement("form");
  this.textInput = document.createElement("input");
  this.dateInput = document.createElement("input");
  this.button = document.createElement("button");
  this.createWindow = function () {
    this.window.classList.add(className);

    // create the text input
    this.textInput.type = "text";
    this.textInput.name = "name";
    this.textInput.placeholder = "Enter todo title";

    this.dateInput.type = "date";

    // create the submit button
    this.button.type = "submit";
    this.button.textContent = "Submit";

    // add the input and button to the form

    this.form.appendChild(this.textInput);
    this.form.appendChild(this.dateInput);
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
