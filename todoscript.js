


const submitBtn = document.getElementById('add-button');
submitBtn.addEventListener('click', renderTodo);

function renderTodo(event) {
    event.preventDefault();
    if (!input.value) {
        alert("Please add a todo");
    } else {
        const input = document.getElementById('input');
        const ul = document.querySelector('ul');

        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = input.value;


        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.textContent = 'X';

        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }
    input.value = "";
}
const list = document.querySelector('ul');
list.addEventListener('click', (e) => e.target.parentElement.remove());

const clearAll = document.getElementById('clear-all');
clearAll.addEventListener('click', clearList);

function clearList(e) {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((li) => li.remove());

}