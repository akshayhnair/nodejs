const form = document.getElementsByTagName('form')[0];
const inputField = document.getElementsByTagName('input')[0];
const todoContainer = document.getElementsByClassName('list')[0];

const btnTrash = document.getElementsByClassName('fa-trash');
const btnCheckBox = document.getElementsByClassName('fa-check-square');



let todoArray = [];

fetchFromStorage();
console.log(todoArray);
todoArray.forEach((todo)=>{
    displayTodo(todo);
})
// event listeners

form.addEventListener('submit', (e)=>{
    todoContainer.innerHTML = '';
    
    const inputVal = inputField.value
    e.preventDefault();
    if(inputVal != ""){
        storeTodo(inputVal);
        fetchFromStorage();
        todoArray.forEach((todo)=>{
            displayTodo(todo);
        });
    }
    
    inputField.value = '';
})

// functions


function storeTodo(inputVal){
    fetchFromStorage();
    const todoItem = inputVal;
    todoArray.push(todoItem);
    console.log(todoArray);

    localStorage.setItem('todoList', JSON.stringify(todoArray));

}

function fetchFromStorage(){
    if(localStorage.getItem('todoList')){
        todoArray = JSON.parse(localStorage.getItem('todoList'))
        console.log(todoArray);
    }
}

function displayTodo(val){
    
    const li = document.createElement('li');
    li.innerText = val;
    const checkBox = document.createElement('i');
    checkBox.classList.add('fas', 'fa-check-square');
    checkBox.setAttribute('checked', 'false');

    const trashCan = document.createElement('i');
    trashCan.classList.add('fas', 'fa-trash');
    
    li.appendChild(checkBox);
    li.appendChild(trashCan);
    todoContainer.appendChild(li);
}




function hello(){
    alert('hello');
}