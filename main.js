let parola = prompt("inserisci una parola");

function palindroma(parola) {
    let parolautenteinversa = '';
    for (let i=1; i<=parola.length; i++) {
        parolautenteinversa += parola[parola.length-i];
    }
    if (parola = parolautenteinversa) {
        let risultato = "la parola è palindroma"
        return risultato;
    } else {
        let risultato = "la parola non è palindroma"
        return risultato;
    }
}
console.log(risultato);





