// } //to create something, you need to create a function - to push to local storage
// refactoring this //
function pushToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
