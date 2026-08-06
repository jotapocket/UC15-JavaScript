let Nome = prompt("Qual é o seu nome?");
let Nota_1 = prompt("Qual foi a nota da primeira prova?");
let Nota_2 = prompt("Qual foi a nota da segunda prova?");

let media = (parseFloat(Nota_1) + parseFloat(Nota_2)) / 2;

if (media >= 7) {
    alert("Parabéns " + Nome + "! Você foi aprovado com média " + media);
} else if (media >= 5 && media < 7) {
    alert("Infelizmente " + Nome + ", você está de recuperação. Sua média foi " + media);
} else {
    alert("Infelizmente " + Nome + ", você foi reprovado. Sua média foi " + media);
}