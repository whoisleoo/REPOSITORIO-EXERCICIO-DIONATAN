const input = document.querySelector('.formInput');
const submitButton = document.querySelector('.submit');
const addFirst = document.querySelector('.addFirst');
const removeLast = document.querySelector('.removeLast');
const removeFirst = document.querySelector('.removeFirst');
const list = document.querySelector('ul');
const letterCounter = document.querySelector('.letterCounter');
const selectionBox = document.querySelector('.selectBox');

let tasks = [];

function renderTasks() {
    list.innerHTML = '';

    tasks.forEach(e => {
        const li = document.createElement('li');
        li.textContent = e
        li.classList.add("list-group-item");
        list.appendChild(li);
    });

    sizeHandler();  
}


function addTask(){
    const text = input.value.trim();
    if(!text){
        alert("Digite algo pra adicionar.");
        return;
    }

    tasks.push(text);
    

    input.value = '';

    renderTasks();
    filterHandler()
}


function removeLastTask(){
    if(tasks.length < 1){
        alert("OPA! Não tem nada nessa lista ai");
        return;
    }

    tasks.pop();
    renderTasks();
    filterHandler()
}

function removeFirstTask(){
    if(tasks.length < 1){
        alert("OPA! Não tem nada nessa lista ai");
        return;
    }

    tasks.shift();

    renderTasks();
    filterHandler()

}

function addFirstTask(){
    const text = input.value.trim();
    if(!text){
        alert("Digite algo pra adicionar.");
        return;
    }

    tasks.unshift(text);

    input.value = '';

    renderTasks();
    filterHandler()
}




function sizeHandler(){
    let moreThanFive = 0;
    tasks.forEach(e => {
        if(e.length > 5){
            moreThanFive++
        }
    });

    letterCounter.textContent = `Tasks com mais de 5 letras: ${moreThanFive}`
}

function filterHandler(){
    if(selectionBox.value == "greaterThan"){
        const filteredTasks = tasks.filter(e => e.length > 5);

        list.innerHTML = '';

        filteredTasks.forEach(e => {
            const li = document.createElement('li');
            li.textContent = e;
            li.classList.add("list-group-item");
            list.appendChild(li);
        });
    }else if(selectionBox.value == "normal"){
        renderTasks();
    }else if(selectionBox.value == "uppercase"){
        list.innerHTML = '';

        tasks.forEach(e => {
            const li = document.createElement('li');
            li.textContent = e.toUpperCase();
            li.classList.add("list-group-item");
            list.appendChild(li);
        });
    }
}



submitButton.addEventListener('click', addTask)
removeLast.addEventListener('click', removeLastTask)
removeFirst.addEventListener('click', removeFirstTask)
addFirst.addEventListener('click', addFirstTask)
selectionBox.addEventListener('change', filterHandler);

