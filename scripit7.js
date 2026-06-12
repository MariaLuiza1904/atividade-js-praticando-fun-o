function mostrarFrase() {
    var frases = [
        "Eu não sou preguiçoso, estou no modo economia de energia ",
        "Estudar? Só depois de mais um vídeo ",
        "Se deu erro, é porque funcionou diferente ",
        "Programador não erra, ele testa possibilidades "
    ];

    var numero = Math.floor(Math.random() * frases.length);

    alert(frases[numero]);
}