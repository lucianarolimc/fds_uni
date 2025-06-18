// obtém o ID do botão
const botao = document.querySelector("#exibirmsg");
let mensagem = document.querySelector("#resposta");

// adiciona um evento de escuta para quando
// o botão for clicado
botao.addEventListener("click", exibirTexto);

// função que exibe a mensagem
function exibirTexto(){

    mensagem.innerHTML = "Todos esses que aí estão <br>\
    Atravancando meu caminho, <br>\
    Eles passarão... <br>\
    Eu passarinho! <br>\
    (Mario Quintana)";
}