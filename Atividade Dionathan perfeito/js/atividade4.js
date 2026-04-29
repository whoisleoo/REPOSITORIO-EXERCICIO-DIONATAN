const itens = [
    "Dionathan",
    "Quadrado",
    "Campo real",
    "Matheus",
    "Aula de front-end",
    "Six seven",
    "Bernardo Kuster",
    "The boys"
]

const list = document.querySelector('#task-list');

itens.forEach(element => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = element;

    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger btn-sm';
    removeButton.textContent = 'X';

    removeButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(removeButton);
    list.appendChild(li);
});
