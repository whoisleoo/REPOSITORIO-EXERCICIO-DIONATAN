const respostas = document.querySelectorAll('.resposta')

const perguntas = document.querySelectorAll('.pergunta')



function submitQuestions(){
    const box = this.closest('.box');
    const resposta = box.querySelector('.resposta')
    const pergunta = box.querySelector('.pergunta').textContent

    if(pergunta.includes('manga')){
        resposta.textContent = 'pra comer'
    }else if(pergunta.includes('merge')){
        resposta.textContent = 'é algo incrivel'
    }else if(pergunta.includes('bernardo')){
        resposta.textContent = 'Bernardo Kuster Ragugnetti'
    }else{
        resposta.textContent = 'Parabéns você achou um bug'
    }

}

const submit = document.querySelectorAll('.submit')
submit.forEach(b => b.addEventListener('click', submitQuestions));

/*
*   ESSE CODIGO É SIMPLESMENTE PERFFEITO E FAZ UM FLASH CARD LINDO COM BOTÃO
*   FEITO POR MIM NÃO FOI FEITO PELO CHATGPT
*
*   ========================================================================
*   14/04/2026
*/
