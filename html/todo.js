let todoList = [];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let taskToDo = inputElement.value;
    let dateOfTask = dateElement.value;
    todoList.push({'task': taskToDo, 'dueDate': dateOfTask});

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}


function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let htmlCode = ``;

    for(let i = 0; i < todoList.length; ++i) {
        let {task, dueDate} = todoList[i];
        htmlCode += `
            <span>${task}</span>
            <span>${dueDate}</span>

            <button class="btn btn-delete" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        `;
    }

    containerElement.innerHTML = htmlCode;
}
