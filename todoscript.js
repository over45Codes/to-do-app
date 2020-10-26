
const input = document.getElementById('input');

const submitBtn = document.getElementById('add-button');
submitBtn.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();
    console.log('clicked');
    renderTodo();
}
function renderTodo() {
    let listItem = document.getElementById('list-items');
    console.log(listItem);
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = input.value;
    if (input.value != '');
    (input.value);
    input.value = '';

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    listItem.appendChild(li);
}
document.querySelector('ul').addEventListener('click', deleteItem);

function deleteItem(e) {
    console.log(e.target.parentElement);
    let remove = e.target.parentElement;
    let parentElement = remove.parentElement;
    parentElement.removeChild(remove);
}
const ClearAll = document.getElementById('clear-all');
ClearAll.addEventListener('click', clearAll);

function clearAll(e) {
    console.log('clear all clicked');
    const listItems = document.querySelectorAll('li');
    // Loop through all items & remove
    listItems.forEach((li) => {
        li.remove();
    });
}