// variável global (saldo único para todo o sistema)
let saldo = 0;

function consultarSaldo() {
    alert("Saldo atual: R$ " + saldo);
}

function depositar() {
    let valor = Number(prompt("Digite o valor para depósito:"));

    if (valor > 0) {
        saldo += valor;
        alert("Depósito realizado com sucesso!");
    } else {
        alert("Valor inválido.");
    }
}

function sacar() {
    let valor = Number(prompt("Digite o valor para saque:"));

    if (valor <= 0) {
        alert("Valor inválido.");
    } else if (valor > saldo) {
        alert("Saldo insuficiente.");
    } else {
        saldo -= valor;
        alert("Saque realizado com sucesso!");
    }
}