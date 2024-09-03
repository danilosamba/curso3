function sortear(){
    let quantidade = parseInt(document.getElementById ('quantidade').value);
    let de = parseInt(document.getElementById ('de').value);
    let ate = parseInt(document.getElementById ('ate').value);
    if (ate <= de){
        alert('Número final menor que o inicial verifique e tente novamente')
        reiniciar2()
        return;
    }
   

    if(quantidade > (ate-de)) {
        alert('A quantidade de números a serem sorteados é menor que o conjunto solicitado')
        reiniciar2()
        return;
    }


    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);

        
        console.log(`Sorteados: ${sorteados} Numero: ${numero} De: ${de} Até ${ate}`);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero)
    }
    

   let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`
    alterarStatusBotao();
}




function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;

}

function alterarStatusBotao(){
   let botao = document.getElementById('btn-reiniciar');
   if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
   }else{
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
   }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();

}

function reiniciar2(){
    
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
    
}