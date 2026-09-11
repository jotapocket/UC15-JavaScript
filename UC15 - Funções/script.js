/*console.log("Olá, Luiz! Seja bem-vindo!");
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
*/

// 11/09/2026

/* function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}  

let nome = prompt("Digite seu nome:");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media1 = calcularMedia(nota1, nota2);
console.log(`Olá, ${nome}! Sua média é: ${media1}`);

if (media1 >= 6) {
    console.log("Parabéns! Você foi aprovado(a)!");
} else {
    console.log("Infelizmente, você não foi aprovado(a).");
}

calcularMedia(nota1, nota2); */

// Atv

function calcularViagem(passagem, hospedagem, alimentacao, passeios) {
    return passagem + hospedagem + alimentacao + passeios;
}

let passagem = Number(prompt("Digite o valor da passagem:"));
let hospedagem = Number(prompt("Digite o valor da hospedagem:"));
let alimentacao = Number(prompt("Digite o valor da alimentação:"));
let passeios = Number(prompt("Digite o valor dos passeios:"));
let totalViagem = calcularViagem(passagem, hospedagem, alimentacao, passeios);
console.log(`O valor total da viagem é: ${totalViagem}`);

if (totalViagem > 2000) {
    console.log("O valor total da viagem não está no orçamento. Considere reduzir os gastos.");
} else {
    console.log("O valor total da viagem está dentro do orçamento.");
}
