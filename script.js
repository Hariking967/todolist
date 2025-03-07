let todoList = [];

function addTodo() {
    const inputElementName = document.querySelector('.js-name-input');
    const inputElementDuedate = document.querySelector('.js-due-date-input');

    const name = inputElementName.value.trim();
    const duedate = inputElementDuedate.value;

    if (!name) {
        alert("Please enter a task name.");
        return;
    }

    todoList.push({ name, duedate });

    inputElementName.value = '';
    inputElementDuedate.value = '';

    dispList(); // Update the display after adding a new item
}

function dispList() {
    const todoContainer = document.querySelector('.js-todo-list');
    todoContainer.innerHTML = ''; // Clear previous content

    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `
            <div>${todo.name}</div>
            <div>${todo.duedate || "No due date"}</div>
            <button class="delete-todo-button" onclick="deleteTodo(${index});">Delete</button>
        `;
        todoContainer.appendChild(todoItem);
    });
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    dispList(); // Update the list after deletion
}
