
function introduzPortal(){
    responsiveVoice.speak('Eu sou a Carolina, sua assistente no jogo, irei te guiar pelas perguntas e te ajudar a chegar ao fim', "Brazilian Portuguese Female");
    responsiveVoice.speak("Colocarei algumas perguntas aqui para você responder, caso deseje repetir as opções, pressione a tecla G do teclado", "Brazilian Portuguese Female");
    responsiveVoice.speak("Para selecionar a primeira opção, pressione a tecla F", "Brazilian Portuguese Female");
    responsiveVoice.speak("Para selecionar a segunda opção, pressione a tecla J", "Brazilian Portuguese Female");
    responsiveVoice.speak("Vamos lá, primeira pergunta. Se Maria tem 6 anos e João tem o dobro de sua idade, quantos anos João tem?  ", "Brazilian Portuguese Female");
    responsiveVoice.speak("Primeira Opção, Doze","Brazilian Portuguese Female");
    responsiveVoice.speak("Segunda Opção, 16","Brazilian Portuguese Female");
}

function verificaTecla(){
    document.addEventListener('keydown', teclaKD);
}

function repetirPergunta(){
    responsiveVoice.speak("Primeira pergunta. Se Maria tem 6 anos e João tem o dobro de sua idade, quantos anos João tem?  ", "Brazilian Portuguese Female");
    responsiveVoice.speak("Primeira Opção, Doze","Brazilian Portuguese Female");
    responsiveVoice.speak("Segunda Opção, 16","Brazilian Portuguese Female");
}

function teclaKD (){
    //tecla f = 70 / tecla j = 74 / tecla g = 71
    var tecla = window.event.keyCode;
    if(tecla == 70){
        responsiveVoice.speak('Parabéns, você acertou', "Brazilian Portuguese Female");
        window.location.href = 'pergunta2.html';
    }else if (tecla == 74){
        responsiveVoice.speak('Não foi dessa vez, mas vamos para próxima pergunta', "Brazilian Portuguese Female");
        window.location.href = 'pergunta2.html';
    }else if (tecla == 71){
        responsiveVoice.speak('Não entendeu? Eu repito para você', "Brazilian Portuguese Female");
        repetirPergunta();
        verificaTecla();
    }
}

function criaDivPergunta1 () { 
    //criando o elemento HTML
    var divTexto = document.createElement('img');
    divTexto.src = 'questao1/pergunta1.png';
    divTexto.style.width = '400px';
    divTexto.style.height = '310px';
    divTexto.style.top = '120px';
    divTexto.style.left = '460px';
    divTexto.style.position = 'absolute';
    document.body.appendChild(divTexto);

    //Criando os elementos de resposta
    var divResposta = document.createElement('img');
    divResposta.src = 'questao1/opcaoA.png';
    divResposta.style.top = '500px';
    divResposta.style.left = '460px';
    divResposta.style.position = 'absolute';
    document.body.appendChild(divResposta); 

    var divResposta2 = document.createElement('img');
    divResposta2.src = 'questao1/opcaoB.png';
    divResposta2.style.top = '500px';
    divResposta2.style.left = '670px';
    divResposta2.style.position = 'absolute';
    document.body.appendChild(divResposta2); 
    verificaTecla();
}





