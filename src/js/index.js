/* 
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

  Passo 2 - identificar o clique no botão 

  Passo 3 - adicionar a classe ativo nos projetos escondidos 

Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele 
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

const botaoMostrarPojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarPojetos.addEventListener('click', () => {
  //Passo 3 - adicionar a classe ativo nos projetos escondidos 
  mostrarMaisProjetos();

   // Objetivo 2 - esconder o botão de mostrar mais
  // Passo 1 - pegar o botão e esconder ele
  esconderBotao();
});

function esconderBotao() {
  botaoMostrarPojetos.classList.add("remover");
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetosInativo => {
    projetosInativo.classList.add('ativo');
  });
}
