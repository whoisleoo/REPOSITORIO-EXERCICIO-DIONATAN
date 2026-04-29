const input = document.querySelector('.form-control');
const submitButton = document.querySelector('.submit');
const list = document.querySelector('ul');


function addTask(){
    const text = input.value.trim();
    if(!text){
        return;
    }

    const listElement = document.createElement('li');
    listElement.textContent = text;
    list.appendChild(listElement)

    input.value = '';
}

submitButton.addEventListener('click', addTask)