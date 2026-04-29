const input = document.querySelector('.form-control');
const submitButton = document.querySelector('.submit');
const list = document.querySelector('ul');

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(text => createListItem(text));
}

function saveTasks() {
    const items = document.querySelectorAll('ul li');
    const tasks = Array.from(items).map(li => li.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createListItem(text) {
    const listElement = document.createElement('li');
    listElement.textContent = text;
    listElement.classList.add('list-group-item');
    list.appendChild(listElement);
}


function addTask(){
    const text = input.value.trim();
    if(!text){
        return;
    }

    createListItem(text);

    saveTasks();
    input.value = '';
}




submitButton.addEventListener('click', addTask)
loadTasks();