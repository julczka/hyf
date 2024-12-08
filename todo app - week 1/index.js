//TODO application
//show todos OK
//add a todo OK
//remove a todo OK

const todoInputElement = document.querySelector('#todo-input')
const addTodoButton = document.querySelector("#add-todo-button");
const todoListElement = document.querySelector('ol');
const todos = [];

addTodoButton.addEventListener('click', addTodo);

function createListItemElement(todoToAdd) {
    const listItem = document.createElement('li');
    listItem.innerText = todoToAdd;
    todoListElement.appendChild(listItem);
    createRemoveButtonElement(listItem);
}

function createRemoveButtonElement(listItemElement) {
    const removeButton = document.createElement('button');
    removeButton.addEventListener('click', removeTodo)
    removeButton.innerText = 'Remove'
    listItemElement.appendChild(removeButton);
}

function addTodo() {
    const todoToAdd = todoInputElement.value;
    todos.push(todoToAdd)
    createListItemElement(todoToAdd)

    //reset input
    todoInputElement.value = '';
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



