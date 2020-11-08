//this is going to represent your local storage array - first get out of local storage using the key is 'todos'
//const

const todos = JSON.parse(localStorage.getItem("todos")) || [];
const input = document.getElementById("input");

const submitBtn = document.getElementById("add-button");
submitBtn.addEventListener("click", addTodo);

function addTodo(event) {
  const text = input.value;
  const todo = {
    text,
    id: 1,
  };
  event.preventDefault();
  renderTodo(text);
  todos.push(text);
  pushToLocalStorage();
  console.log("text value is: ", todo);
}

function renderTodo(text) {
  let listItem = document.getElementById("listItems");
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  ul.appendChild(li);
  listItem.appendChild(li);
  li.textContent = text;

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
}
document.querySelector("ul").addEventListener("click", deleteItem);

function deleteItem(e) {
  let remove = e.target.parentElement;
  let parentElement = remove.parentElement;
  parentElement.removeChild(remove);
}

const ClearAll = document.getElementById("clear-all");
ClearAll.addEventListener("click", clearAll);

function clearAll(e) {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    li.remove();
    // use this to clear from or remove from local storage
    localStorage.removeItem("todos");
  });
}

// } //to create something, you need to create a function - to push to local storage

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

//create individual to do item, create a unique id for each to do item in list - this will help with the strikethrough functionality
