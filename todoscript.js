//Console log in local storage//
//localStorage.setItem("myObject", { name: "Jane Smith", age: 30 });
//let returnValue = localStorage.getItem("myObject");
//console.log(returnValue);
//console.log(typeof returnValue);
//console.log(returnValue.name);

//const storedTodos = [];

//const renderTodo = JSON.parse(localStorage.getItem("todos"));

const input = document.getElementById("input");

const submitBtn = document.getElementById("add-button");
submitBtn.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
  //console.log("clicked");
  renderTodo();
}
function renderTodo() {
  let listItem = document.getElementById("list-items");
  console.log(listItem);
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  ul.appendChild(li);
  listItem.appendChild(li);
  //trying to add local storage///
  //storedTodos.push(renderTodo);
  //localStorage.setItem("todos", JSON.stringify(storedTodos));
  li.textContent = input.value;
  if (input.value != "");
  input.value;
  input.value = "";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  listItem.appendChild(li);
}

document.querySelector("ul").addEventListener("click", deleteItem);

function deleteItem(e) {
  console.log(e.target.parentElement);
  let remove = e.target.parentElement;
  let parentElement = remove.parentElement;
  parentElement.removeChild(remove);
}

const ClearAll = document.getElementById("clear-all");
ClearAll.addEventListener("click", clearAll);

function clearAll(e) {
  console.log("clear all clicked");
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    li.remove();
  });
}
