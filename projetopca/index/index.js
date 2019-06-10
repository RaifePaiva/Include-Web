//------------------------------------------------------------------------------

// Declaração da variável que contém o que será falado.
// Neste exemplo ela tem valor nulo.
var texto1;

// Método / função que é invocada através do botão no HTML.
function falar() {
  // Chamada ao método/função que executa a fala,
  // através da API ResponsiveVoice.org.
  responsiveVoice.speak(texto1, "Brazilian Portuguese Female");
}

// Use: - "Brazilian Portuguese Female" para voz feminina.
//      - "Brazilian Portuguese Male" para voz masculina.

// Selecionando o elemento div que contém a primeira frase.
var divFrase = document.querySelector("#frase-1");

// Atribuir o conteudo do elemento div para o texto a ser falado.
texto1 = divFrase.innerText;

//texto = imgFrase.alt;

// Invocar o método falar(), para que escutemos a frase.
falar();

// ----------------------------------------------
// (((  Desafio  )))
// ----------------------------------------------
// Quais modificações seriam necessárias para que
// escutemos a frase da imagem somente quando o
// cursor do mouse passar sobre ela?
// ----------------------------------------------