
//Select Elements  and add eventlisteners
// check if input is working with a console.log
//create a variable that will store get.elementbyId for the input element.
let inputValue = document.getElementById('input');
inputValue.addEventListener('keyup', function(e){
//retrieve  and store the value from the input box
let inputBoxValue = e.target.value;

//console.log(inputBoxValue);

let clearInput = document.getElementById("clearAll");clearInput.addEventListener("click", clearInput);
 console.log(clearInput);
//I need the input data to be deleted when I click on the button ClearAll 

});

document.getElementById("addButton").addEventListener("click", inputValue);
//console.log(inputValue);



//clear to .addeventlistener to click to clear the list 

// functions
//add add the data
//function add task
// clear the list 
//delete the list 

// get element by id for button that will add items to list
// get element by id for ul list

// create a new li element
// document.createElement('li);

// add class to li 
// li.className ????

// add text node with input value appendChild
// appendChild to ul parent 
// 




  










