//this is going to represent your local storage array - first get out of local storage using the key is 'todos'
//const
const savedTodos = [];
const todos = JSON.parse(localStorage.getItem("todos")) || [];
const input = document.getElementById("input");

const submitBtn = document.getElementById("add-button");
submitBtn.addEventListener("click", addTodo);

function addTodo(event) {
  const text = input.value;
  event.preventDefault();
  renderTodo(text);
  todos.push(text);
  pushToLocalStorage();
  //console.log("text value is: ", text);
}
function renderTodo(text) {
  let listItem = document.getElementById("listItems");
  //console.log(listItem);
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  ul.appendChild(li);
  listItem.appendChild(li);
  li.textContent = text;

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  savedTodos.push(text);
  localStorage.setItem("text", JSON.stringify(savedTodos));
}

document.querySelector("ul").addEventListener("click", deleteItem);

function deleteItem(e) {
  //console.log(e.target.parentElement);
  let remove = e.target.parentElement;
  let parentElement = remove.parentElement;
  parentElement.removeChild(remove);
  localStorage.setItem("text", JSON.stringify(savedTodos));
}

const ClearAll = document.getElementById("clear-all");
ClearAll.addEventListener("click", clearAll);

function clearAll(e) {
  //console.log("clear all clicked");
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    li.remove();
    // use this to clear from or remove from local storage
    localStorage.removeItem("todos");
  });
}
//to create something, you need to create a function - to push to local storage
function saveToLocalStorage() {
  localStorage.setItem("savedTodos", JSON.stringify(savedTodos));
}

function pushToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderOnLoad() {
  todos.forEach((todo) => {
    let listItem = document.getElementById("listItems");
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    ul.appendChild(li);
    listItem.appendChild(li);

    li.textContent = todo;

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    listItem.appendChild(li);
  });
}

renderOnLoad();

//create individual to do item, create a unique id for to do item in li - this will help with the strikethrough functionality
