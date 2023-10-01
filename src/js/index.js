const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
 
        botao.classList.add("selecionado");
        personagens[i].classList.add("selecionado");

    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
