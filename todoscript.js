//this is going to represent your local storage array - first get out of local storage using the key is 'todos'
//const

const todos = JSON.parse(localStorage.getItem("todos")) || [];
let todoIds = JSON.parse(localStorage.getItem("todoIds")) || 0;
//step 1. Set a global variable for the new todId
//that you will save in local storage to keep a running total
const input = document.getElementById("input");

const submitBtn = document.getElementById("add-button");
submitBtn.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();
  const text = input.value;
  const todo = {
    text,
    id: todoIds,
    //step 2) Set the todo id to be the current value of that global variable
  };

  todoIds += 1;
  //step 3 increment that vaiable and save it to the local storage ??
  // Step 4) add the new todo id to local storage
  localStorage.setItem("todoIds", todoIds);

  //Step 5) Pass the todo , not just the text.
  renderTodo(todo); // change from text to todo // renderTodo(text);
  todos.push(todo); // change from text to todo //  todos.push(text);
  //pass todos explicitly
  pushToLocalStorage(todos);
  console.log("text value is: ", todo);
}

function renderTodo(todo) {
  let listItem = document.getElementById("listItems");
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  ul.appendChild(li);
  listItem.appendChild(li);
  li.textContent = todo.text;

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  //Step 6a. Add an event handler when a todo is added
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("li to be removed", li);
    li.remove();
    //7a. delete from DOM. An item can delete itself.

    //8a. delete from local storage
    let idToRemoveTodo = todo.id;
    console.log("todo id:", idToRemoveTodo);
    //it allows you to go through every single item in an array and if the todo is true it will shoot back into new array
    let newTodos = todos.filter((todo) => todo.id != idToRemoveTodo);
    console.log("new todos: ", newTodos);

    // 9a. need to make sure to push the new todos to local storage
    pushToLocalStorage(newTodos);
  });
}
//remove this: below - you do not need it anymore - because of the new refactoring, we are adding an eventlistener above
// document.querySelector("ul").addEventListener("click", deleteItem);

// function deleteItem(e) {
//   let remove = e.target.parentElement;
//   let parentElement = remove.parentElement;
//   parentElement.removeChild(remove);
// }

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
// need to create a function - to push to local storage // important tips and refactoring // pass it explicitly
function pushToLocalStorage(newTodos) {
  console.log("new Todos", newTodos);
  localStorage.setItem("todos", JSON.stringify(newTodos));
}

function renderOnLoad() {
  todos.forEach((todo, todoIds) => {
    let listItem = document.getElementById("listItems");
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    ul.appendChild(li);
    listItem.appendChild(li);

    li.textContent = (todo, todoIds);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-right";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    listItem.appendChild(li);

    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("li to be removed", li);
      li.remove();
      //7a. delete from DOM. An item can delete itself.
      //8a. delete from local storage
      let idToRemoveTodosIds = todoIds.id;
      console.log("todoIds id:", idToRemoveTodosIds);
      //it allows you to go through every single item in an array and if the todo is true it will shoot back into new array
      let newTodoIds = todoIds.filter(
        (todoIds) => todoIds.id != idToRemoveTodosIds
      );
      console.log("new todoIds: ", newTodoIds);
    });
    // 9a. need to make sure to push the new todos to local storage
    pushToLocalStorage(newTodoIds);
  });
}

renderOnLoad();
