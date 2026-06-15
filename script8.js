// vetor para armazenar as notas
let notas = [];

function adicionarNota() {
    let nota = Number(prompt("Digite a nota:"));

    if (!isNaN(nota)) {
        notas.push(nota);
        alert("Nota adicionada com sucesso!");
    } else {
        alert("Valor inválido.");
    }
}

function calcularMedia() {
    if (notas.length === 0) {
        alert("Nenhuma nota cadastrada.");
    } else {
        let soma = 0;

        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }

        let media = soma / notas.length;
        alert("Média das notas: " + media);
    }
}

function mostrarMaior() {
    if (notas.length === 0) {
        alert("Nenhuma nota cadastrada.");
    } else {
        let maior = notas[0];

        for (let i = 1; i < notas.length; i++) {
            if (notas[i] > maior) {
                maior = notas[i];
            }
        }

        alert("Maior nota: " + maior);
    }
}