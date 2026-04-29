const titleBox = document.querySelector('.titulo');
let submitButton = document.querySelector('.submit');

function titleChanger(){
    let customTitle = prompt("Qual titulo você gostaria?");

    if(customTitle == null){
        alert("Nenhum nome informado.");
        return;
    }

    titleBox.textContent = customTitle;

}

submitButton.addEventListener('click', titleChanger);