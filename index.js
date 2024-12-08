//TODO application
//show todos OK
//add a todo OK
//remove a todo OK

const todoInputElement = document.querySelector('#todo-input')
const addTodoButton = document.querySelector("#add-todo-button");
const todoListElement = document.querySelector('ol');

addTodoButton.addEventListener('click', addTodo);

let todo = todoInputElement.value;

const todos = [];

function getInputValue() {
    todo = todoInputElement.value;
}

function createListItemElement() {
    const listItem = document.createElement('li');
    listItem.id = todo
    listItem.setAttribute('data-todo', todo);

    listItem.innerText = todo;
    todoListElement.appendChild(listItem);
    createRemoveButtonElement(listItem);
}

function createRemoveButtonElement(listItemElement) {
    const removeButton = document.createElement('button');
    removeButton.addEventListener('click', removeTodo)
    removeButton.innerText = 'Remove'
    listItemElement.appendChild(removeButton);
}



function removeTodo(event) {
    const target = event.target;
    target.style = 'background: red;'
    const parent = target.parentNode;
    const todoToRemove = parent.firstChild.textContent;
    parent.remove();
    const index = todos.indexOf(todoToRemove);
    if (index > -1) {
        todos.splice(index, 1);
    }
}

function addTodo(event) {
    console.log(event)

    getInputValue();
    todos.push(todo)
    createListItemElement()
    todoInputElement.value = '';
}

