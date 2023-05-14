function addReminder() {
    var input = document.getElementById("new-reminder");
    var text = input.value;
    if (text === "") {
      return;
    }
    var list = document.getElementById("reminder-list");
    var newItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "reminder" + (list.children.length + 1);
    var label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.appendChild(document.createTextNode(text));
    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    list.appendChild(newItem);
    input.value = "";
  }
  