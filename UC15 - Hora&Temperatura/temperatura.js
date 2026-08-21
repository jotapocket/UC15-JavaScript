// 1. Pegar a temperatura atual
let temperatura = prompt ('Qual é a temperatura atual?');

// 2. Selecionar elementos do HTML
const paginaT = document.getElementById('paginaT');
const emojiTempEl = document.getElementById('emojiT');
const temperaturaEl = document.getElementById('temperatura');

// 3. Variáveis que guardam o resultado
let temperaturaStr = '';

// 4. Decidir o clima com if/else
if (temperatura < 0) {
    temperaturaStr = 'Está muito frio! 🥶';
} else if (temperatura >= 0 && temperatura <= 10) {
    temperaturaStr = 'Está frio! 🧊';
} else if (temperatura > 10 && temperatura <= 20) {
    temperaturaStr = 'Está ameno! 🌿';
} else if (temperatura > 20 && temperatura < 35) {
    temperaturaStr = 'Está calor! ☀️';
} else {
    temperaturaStr = 'Está muito quente! 🥵';
}

// 5. Colocar o conteúdo nos elementos
emojiTempEl.textContent = temperaturaStr;
temperaturaEl.textContent = `A temperatura atual é de ${temperatura}°C`;

// 6. Log para o desenvolvedor
console.log(`Temperatura: ${temperatura}°C | Clima: ${temperaturaStr}`);