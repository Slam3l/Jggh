const botaoAlterartema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagembotaotrocadetema = document.querySelector(".imagem-botao")

botaoAlterartema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  
  body.classList.toggle("modo-escuro");
  
  if (modoEscuroEstaAtivo){
    
    imagembotaotrocadetema.setAttribute("src","./src/imagens/sun.png");
  } else {
    imagembotaotrocadetema.setAttribute("src","./src/imagens/moon.png")
  }
});
