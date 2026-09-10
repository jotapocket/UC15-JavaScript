console.log("Olá, Luiz! Seja bem-vindo!");
console.log("Olá, Gustavo! Seja bem-vindo!");
console.log("Olá, Cecília! Seja bem-vinda!");

function darBoasVindas(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
}

darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecília");

function apresentar(nome, idade) {
    console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
}

apresentar("Luiz", 25);
apresentar("Gustavo", 30);
apresentar("Cecília", 28);

function estudando(nome) {
    console.log(`${nome} está estudando JavaScript!`);
}

estudando("João");

function calcularSoma(a, b) {
    return a + b;
}

const resultadoSoma = calcularSoma(2012, 1910);

console.log(`O resultado da soma é: ${resultadoSoma}`);

function calcularmédia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    if (media >= 6) {
        console.log(`A média é ${media}. Parabéns, você foi aprovado!`);
    } else {
        console.log(`A média é ${media}. Infelizmente, você não foi aprovado.`);
    }
}

calcularmédia(8, 9);
calcularmédia(5, 6);