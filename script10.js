// vetor para armazenar os números
let numeros = [];

function inserirNumero() {
    let valor = Number(prompt("Digite um número:"));

    if (!isNaN(valor)) {
        numeros.push(valor);
        alert("Número adicionado com sucesso!");
    } else {
        alert("Valor inválido.");
    }
}

function mostrarMaior() {
    if (numeros.length === 0) {
        alert("Nenhum número cadastrado.");
    } else {
        let maior = numeros[0];

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }

        alert("Maior número: " + maior);
    }
}

function mostrarMenor() {
    if (numeros.length === 0) {
        alert("Nenhum número cadastrado.");
    } else {
        let menor = numeros[0];

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] < menor) {
                menor = numeros[i];
            }
        }

        alert("Menor número: " + menor);
    }
}