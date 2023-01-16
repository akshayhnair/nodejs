window.onload = function () {

    console.log('hello')
    const form = document.querySelector('form')

    function getFormData(event) {
        event.preventDefault()
        console.log('hello from getFormData()')
        const todo = document.getElementsByName('todo')[0].value
        addTodo(todo)
    }
    form.addEventListener('submit', getFormData)

    function addTodo(todo) {

        const listItem = document.getElementById('list')
        const todoElement = document.createElement('li')

        todoElement.innerHTML += `
        ${todo} <i class="fas fa-check-square"></i
        ><i class="fas fa-trash"></i>
        `
        listItem.appendChild(todoElement)

    }

    function removeTodo() {


    }

    function clearTodos() {



    }



}