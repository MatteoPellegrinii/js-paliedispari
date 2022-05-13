let numerocomputer;
let numeroutente;
let sceltagiocatore;
let somma;

function generanum () {
    let numerocomputerR = Math.floor(Math.random()*5)+1;
    console.log(numerocomputerR);
    return numerocomputerR;
}

function vincitore () {
    if (somma % 2 == 0 && sceltagiocatore == "pari") {
        console.log("hai vinto è uscito pari");

    } else if (somma % 2 == 0 && sceltagiocatore == "dispari" ){
        console.log("hai perso è uscito pari");

    } else if (somma % 2 !== 0 && sceltagiocatore == "pari" ){
        console.log("hai perso è uscito dispari");

    }else {
        console.log("hai vinto è uscito dispari");
    }
}

numeroutente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(numeroutente);
sceltagiocatore = prompt ("pari o dipari?");
numerocomputer = generanum ();
somma = numeroutente + numerocomputer;
console.log(somma);
vincitore();