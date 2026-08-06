let Nome = prompt("Qual é o seu nome?");
let Nota_1 = prompt("Qual foi a nota da primeira prova?");
let Nota_2 = prompt("Qual foi a nota da segunda prova?");

let media = (parseFloat(Nota_1) + parseFloat(Nota_2)) / 2;

if (media >= 7) {
    alert("Parabéns " + Nome + "! Você foi aprovado com média " + media);
} else {
    alert("Infelizmente " + Nome + ", você não foi aprovado. Sua média foi " + media);
}