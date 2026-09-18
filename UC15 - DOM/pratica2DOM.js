function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;

    document.getElementById("resultadoCidade").textContent = "Você escolheu conhecer " + cidade + "!";
}

function alterarMensagem() {
    document.getElementById("resultadoCidade").style.color = "blue";
    document.getElementById("resultadoCidade").style.fontSize = "20px";
}

let numero = document.getElementById("numero");

function aumentar() {
    numero.textContent = parseInt(numero.textContent) + 1;
}

function diminuir() {
    numero.textContent = parseInt(numero.textContent) - 1;
}
