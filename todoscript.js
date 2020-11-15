const todos = JSON.parse(localStorage.getItem("todos")) || [];
let todoIds = JSON.parse(localStorage.getItem("todoIds")) || 0;

const input = document.getElementById("input");

const submitBtn = document.getElementById("add-button");
submitBtn.addEventListener("click", addTodo);

const ClearAll = document.getElementById("clear-all");
ClearAll.addEventListener("click", clearAll);

function addTodo(event) {
  event.preventDefault();
  const text = input.value;
  input.value = " ";
  const todo = {
    text,
    id: todoIds,
  };

  todoIds += 1;

  localStorage.setItem("todoIds", todoIds);

  renderTodo(todo);
  todos.push(todo);

  pushToLocalStorage(todos);
}

function renderTodo(todo) {
  let todosList = document.getElementById("listItems");
  let li = document.createElement("li");
  todosList.appendChild(li);

  li.textContent = todo.text;

  let deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "btn";
  deleteBtn.appendChild(document.createTextNode("Done"));
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    li.remove();

    let idToRemoveTodo = todo.id;

    let newTodos = todos.filter((todo) => todo.id != idToRemoveTodo);

    pushToLocalStorage(newTodos);
  });
}

function clearAll(e) {
  const todosList = document.querySelectorAll("li");
  todosList.forEach((li) => {
    li.remove();

    localStorage.removeItem("todos");
  });
}

function pushToLocalStorage(newTodos) {
  localStorage.setItem("todos", JSON.stringify(newTodos));
}

function renderOnLoad() {
  todos.forEach((todo, todoIds) => {
    let todosList = document.getElementById("listItems");
    let li = document.createElement("li");
    todosList.appendChild(li);

    li.textContent = todo.text;

    let deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "btn";
    deleteBtn.appendChild(document.createTextNode("Done"));
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();

      li.remove();

      let idToRemoveTodo = todo.id;

      let newTodos = todos.filter((todo) => todo.id != idToRemoveTodo);

      pushToLocalStorage(newTodos);
    });
  });
}

renderOnLoad();
