const typingText = document.querySelector('.typing-text');


const textoCompleto = "Desenvolvedor FullStack";

let posicao = 0;

function type() {
  if (posicao < textoCompleto.length) {
    typingText.textContent += textoCompleto.charAt(posicao);
    posicao++;
    setTimeout(type, 100);
  }
}

window.addEventListener('load', () => {
  type();
});
