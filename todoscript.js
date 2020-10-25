
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
//4. function to clear  

document.querySelector('ul').addEventListener('click', deleteItem);

function deleteItem(e) {
    console.log(e.target.parentElement);
    let remove = e.target.parentElement;
    let parentElement = remove.parentElement;
    parentElement.removeChild(remove);

    // this will give us the button itself{
    //here we want to find out what how we can get the li from this
    // since in your renderTodo() you created the button as a 'child' of the li
    // (HINT) what is the relationship of the li to the button?
    // console.log(event.target.?) to get the li?
}

//}
//5. I need the input data to be cleared when I click on the button ClearAll ' this needs to clear all items when clicked 

const ClearAll = document.getElementById('clear-all');
ClearAll.addEventListener('click', clearAll);

function clearAll(e) {
    console.log('clear all clicked');
    let remove = e.target.appendChild;
    let appendChild = remove.appendChild;
    appendChild.removeChild(remove);
    input.value = "";
}


