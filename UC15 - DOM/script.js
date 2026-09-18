/*

function mudarTexto() {
    document.getElementById("titulo").textContent = "Você clicou no botão!";

}

function mudarCor() {
    document.getElementById("mensagem").style.color = "red";
}

*/

// 18/09

function mostrarNome() {
    let nome = document.getElementById("nome").value;

    document.getElementById("resultado").textContent = "Olá, " + nome + "!";
}

let numero = document.getElementById("numero");
let valor = parseInt(numero.textContent);

function aumentar() {
    valor++;
    numero.textContent = valor;
}

function diminuir() {
    valor--;
    numero.textContent = valor;
}