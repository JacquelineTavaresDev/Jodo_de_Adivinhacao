

function getRandomArbitrary(min,max) {
    return Math.floor(Math.random() * (101-0 + 1)) + min;
}

let numAleatorio = getRandomArbitrary(0, 101);

let maxTentativas = 3;
const numInformado = (id) => document.getElementById(id);
const obterValorInformado = () => parseInt(numInformado("valor").value);
const limparCampos = () => numInformado("valor").value =""; 

function chutar(){
    const valorInformado = obterValorInformado();
    maxTentativas--;
    
    if (maxTentativas <= 0){
      document.getElementById("resultado").textContent = "Você perdeu! O número secreto era " + numAleatorio;
      document.getElementById("dica").textContent = "";
      document.getElementById("tentativas").textContent = "";
    } else{
    if (valorInformado > 100 || valorInformado < 0){
      document.getElementById("dica").textContent = "Dica: Digite um número entre 0 e 100!";
      document.getElementById("resultado").textContent = "";
      document.getElementById("tentativas").textContent = "Tentativas restante: " + maxTentativas;
    } else if (valorInformado == numAleatorio){
      document.getElementById("resultado").textContent = "Parabéns, você acertou!";
      document.getElementById("tentativas").textContent = "";
      document.getElementById("dica").textContent = "";
    } else if (valorInformado > numAleatorio){
      document.getElementById("dica").textContent = "Dica: o número secreto é menor";
      document.getElementById("resultado").textContent = "";
      document.getElementById("tentativas").textContent = "Tentativas restante: " + maxTentativas;
    } else {
      document.getElementById("dica").textContent = "Dica: o número secreto é maior";
      document.getElementById("resultado").textContent = "";
      document.getElementById("tentativas").textContent = "Tentativas restante: " + maxTentativas;
    }
  }
}








    



