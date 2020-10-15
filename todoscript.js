// get Selectors  
const taskInput = document.querySelector('.task-input');
const todoButton = document.querySelector('.addButton');
const todoList = document.querySelector('.todo-list');


// Event Listeners
todoButton.addEventListener('click', addButton);

// Functions
function addButton(event) {
    //prevent form from submitting
    event.preventDefault();
}


