function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className = 'cartao'

    cartao.innerHTML = `
        <div class="conteudo">
                <h3>${categoria}</h3>
                <div class="pergunta">
                    ${pergunta}
                </div>
                <div class="resposta">
                    ${resposta}
                </div>
            </div>
    `

    container.appendChild(cartao)
}



function adicionarNovoCartao(){    
    let coisas = {
    categoria : prompt("Qual a categoria do seu cartão?"),
    pergunta : prompt("Qual vai ser a pergunta do seu cartão?"),
    resposta:  prompt("Qual vai ser a resposta do seu cartão?")
    }

    if(coisas.categoria && coisas.pergunta && coisas.resposta){
        criar_cartao(coisas.categoria, coisas.pergunta, coisas.resposta);

    }else{
        alert("vc precisa preencher tudo.")
    }



}

adicionarNovoCartao()

