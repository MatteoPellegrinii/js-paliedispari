function palindroma(parola) {
    let parolautenteinversa = '';
    for (let i=1; i<=parola.length; i++) {
        parolautenteinversa += parola[parola.length-i];
    }
    if (parola = parolautenteinversa) {
        return 'la parola è palindroma';
    } else {
        return 'la parola non è palindrroma';
    }
}

let parola = prompt("inserisci una parola");

