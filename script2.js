function somar() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    
    let resultado = num1 + num2;
    alert("Resultado da soma: " + resultado);
}

function multiplicar() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    
    let resultado = num1 * num2;
    alert("Resultado da multiplicação: " + resultado);
}

function comparar() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));

    if (num1 > num2) {
        alert("O primeiro número é maior.");
    } else if (num2 > num1) {
        alert("O segundo número é maior.");
    } else {
        alert("Os dois números são iguais.");
    }
}