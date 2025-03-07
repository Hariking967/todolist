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
    inputElementDuedate.value = 'dd-mm-yyyy';

    dispList();
}

function dispList()
{
    let disp = ``;
    for (let i=0; i<todoList.length; i++)
    {
        disp += `
            <div>${todoList[i].name}</div> 
            <div>${todoList[i].duedate}</div>
            `;
    }
    document.querySelector('.js-todo-list').innerHTML = disp;
}
