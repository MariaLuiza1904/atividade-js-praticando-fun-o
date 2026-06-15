// vetor para armazenar os números
let numeros = [];

function adicionarNumero() {
    let valor = Number(prompt("Digite um número:"));

    if (!isNaN(valor)) {
        numeros.push(valor);
        alert("Número adicionado com sucesso!");
    } else {
        alert("Valor inválido.");
    }
}

function mostrarNumeros() {
    if (numeros.length === 0) {
        alert("Nenhum número cadastrado.");
    } else {
        alert("Números armazenados:\n" + numeros.join("\n"));
    }
}

function mostrarSoma() {
    if (numeros.length === 0) {
        alert("Nenhum número para somar.");
    } else {
        let soma = 0;

        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }

        alert("Soma dos números: " + soma);
    }
}