// lista para armazenar os nomes
let nomes = [];

function adicionarNome() {
    let nome = prompt("Digite um nome:");

    if (nome) {
        nomes.push(nome);
        alert("Nome cadastrado com sucesso!");
    } else {
        alert("Nome inválido.");
    }
}

function mostrarNomes() {
    if (nomes.length === 0) {
        alert("Nenhum nome cadastrado.");
    } else {
        alert("Nomes cadastrados:\n" + nomes.join("\n"));
    }
}

function contarNomes() {
    alert("Quantidade de nomes cadastrados: " + nomes.length);
}