
const input = document.getElementById('input');

const submitBtn = document.getElementById('add-button');
submitBtn.addEventListener('click', addTodo);

//.addEventListener('click', removeItem);

function addTodo(event) {
    event.preventDefault();
    console.log('clicked');
    renderTodo();
}
// addtodo items to array and push to local storage //render to array//to refresh the browser or refresh the page and still be able to have my todo items render
//const itemArray[
//  ];
// const item = itemArray[ ?
//   ];
// 
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
//4. function to delete a task when I click on the delete (X) button  
const clearSubmit = document.getElementById('list-items');
clearSubmit.addEventListener('click', clearList);

function clearList(event) {
    console.log(1);
    input.value = "";
}
//5. I need the input data to be cleared when I click on the button ClearAll 
const ClearAll = document.getElementById('clear-all');
ClearAll.addEventListener('click', clearTodo);

function clearTodo(event) {
    console.log('clear all clicked');
    input.value = "";
}


