/* Questão 1: Operações matemáticas

Crie duas variáveis e mostre no console:

Soma

Subtração

Multiplicação

Divisão */

let num1 = 10;
let num2 = 5;

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);

/* Questão 2: Dobro e triplo

Crie uma variável chamada numero.

Mostre:

O dobro do número

O triplo do número */

let numero = 7;

console.log("Dobro:", numero * 2);
console.log("Triplo:", numero * 3);

/* Questão 3: Nome e idade do usuário

Utilize prompt() para perguntar o nome do usuário e idade.

Depois, mostre uma mensagem no console:

Olá, João! Seja bem-vindo! Você tem 20 anos. */

let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

console.log(`Olá, ${nome}! Seja bem-vindo! Você tem ${idade} anos.`);

/* Questão 4: Média de três notas

Peça três notas ao usuário.

Calcule a média e mostre o resultado.

Exemplo:

Nota 1: 8

Nota 2: 7

Nota 3: 9

Média: 8 */

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media.toFixed(2));

/* Questão 5: Sistema de login

Crie duas variáveis:

let usuarioCorreto = "admin";

let senhaCorreta = "1234";

Peça ao usuário:

Usuário

Senha

Verifique:

Se os dois estiverem corretos:

Login realizado com sucesso!

Se o usuário estiver errado:

Usuário incorreto.

Se a senha estiver errada:

Senha incorreta.

Número maior

Peça dois números.

Descubra qual deles é maior.

Exemplo:

Digite o primeiro número: 15

Digite o segundo número: 8

O maior número é 15. */

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Login realizado com sucesso!");
}

else if (usuario !== usuarioCorreto) {
    console.log("Usuário incorreto.");
}

else if (senha !== senhaCorreta) {
    console.log("Senha incorreta.");
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

if (numero1 > numero2) {
    console.log(`O maior número é ${numero1}.`);
} else if (numero2 > numero1) {
    console.log(`O maior número é ${numero2}.`);
} else {
    console.log("Os números são iguais.");
}