

function introduzPortal(){
    responsiveVoice.speak("Olá, você está no educação inclusiva. Nossa intenção é tornar o aprendizado mais prático e didático. Voltado para alfabetização em problemas matemáticos do ensino fundamental para pessoas com deficiência visual. Para começar pelo nível iniciante, pressione a tecla F, se quiser ir para o intermediário, pressione G, e caso queira pular direto para o avançado, pressione J", "Brazilian Portuguese Female");
}

function iniciarJogo1(){
    location.href = 'Pergunta1.html';
}
function iniciarJogo2(){
    location.href = 'pergunta6.html';
}
function iniciarJogo3(){
    location.href = 'pergunta11.html';
}

function verificaTecla(){
    document.addEventListener('keydown', teclaKD);
}

function teclaKD (){
    //tecla f = 70 / tecla j = 74 / tecla g = 71
    var tecla = window.event.keyCode;
    if(tecla == 70){
        window.location.href = 'Pergunta1.html';
    }else if (tecla == 71){
        window.location.href = 'pergunta6.html';
    }else if (tecla == 74){
        location.href = 'pergunta11.html';
    }
}

verificaTecla();