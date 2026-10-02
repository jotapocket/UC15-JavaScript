const formulario = document.querySelector("#criticaForm");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const roteiro = Number(document.querySelector("#roteiro").value);
    const atuacao = Number(document.querySelector("#atuacao").value);
    const fotografia = Number(document.querySelector("#fotografia").value);
    const trilha = Number(document.querySelector("#trilha").value);
    const direcao = Number(document.querySelector("#direcao").value);

    const media = (roteiro + atuacao + fotografia + trilha + direcao) / 5;
    let classificacao;

    if (media >= 9) {
        classificacao = "⭐ Excelente";
    } else if (media >= 7) {
        classificacao = "👍 Muito bom";
    } else if (media >= 5) {
        classificacao = "🙂 Regular";
    } else {
        classificacao = "👎 Precisa melhorar";
    }

    document.querySelector("#media").textContent = "Média: " + media.toFixed(1).replace(".", ",");
    document.querySelector("#classificacao").textContent = "Classificação: " + classificacao;
    document.querySelector("#resultadoCritica").hidden = false;
});
