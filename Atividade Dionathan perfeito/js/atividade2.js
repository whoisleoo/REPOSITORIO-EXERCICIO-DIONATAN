let submitButton = document.querySelector('.submit');

function themeChanger(){
    document.body.classList.toggle('dark');

    let checkTheme = document.body.classList.contains('dark') ? true : false;

    if(checkTheme){
        submitButton.textContent = "Light Theme"
    }else{
        submitButton.textContent = "Dark Theme"
    }
   

}


submitButton.addEventListener('click', themeChanger);


