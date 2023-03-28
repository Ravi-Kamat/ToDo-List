
const input = document.getElementById('todo-input');
const button = document.getElementById('add-todo-btn');
const list = document.getElementById('todo-list');

button.addEventListener('click', () => {
    const todoText = input.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.innerText = todoText;
        list.appendChild(todoItem);
        input.value = '';
    }
});

input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        button.click();
    }
});
