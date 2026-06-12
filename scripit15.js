function gerarMeme() {
    var memes = [
        "Eu: vou estudar\nTambém eu: só mais um vídeo ",
        "Ninguém:\nAbsolutamente ninguém:\nEu programando às 3 da manhã ",
        "Era só um código simples... até dar erro ",
        "Funciona? Não.\nMas pelo menos não sei por quê ",
        "Quando o código roda de primeira: SUSPEITO "
    ];

    var numero = Math.floor(Math.random() * memes.length);

    alert(memes[numero]);
}