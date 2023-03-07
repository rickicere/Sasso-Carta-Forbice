alert("Ciao, sei pronto a giocare  ");

var nomeGiocatore = window.prompt("Per iniziare inserisci qui il tuo nome: ");

document.getElementById("titolo").innerHTML = "Benvenuto " + nomeGiocatore

var sceltaUtente;

alert("Regole di gioco:                                                                           -Clicca su Sasso, Carta, Forbice e spera di vincere")



function cliccatoCarta() {
    sceltaUtente = "carta";
   alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}

function cliccatoForbici() {
    sceltaUtente = "forbici";
    alert(nomeGiocatore + " hai scelto " + sceltaUtente);
}

function cliccatoSasso() {
    sceltaUtente = "sasso";
   alert(nomeGiocatore + " Hai scelto " + sceltaUtente);
}

function verdetto() {
    document.getElementById("carta").style.display = 'none';
    document.getElementById("forbici").style.display = 'none';
    document.getElementById("sasso").style.display = 'none';
    document.getElementById("pulsante").style.display = 'none';
    var sceltaComputer;
    if (sceltaUtente == "carta"){
        sceltaComputer = "forbici";
    }

    if (sceltaUtente == "forbici"){
        sceltaComputer = "sasso";
    }

    if (sceltaUtente == "sasso"){
        sceltaComputer = "carta";
    }

document.getElementById("titolo").innerHTML = nomeGiocatore + " HAI PERSO MUHAHAHAHAHAH";
document.getElementById("informazioni").innerHTML = "Il computer ha scelto " +sceltaComputer + ". Tu, salame hai scelto " + sceltaUtente;
}

let prova = setTimeout(saluta, 30000);

function saluta(){
    alert('Per rigiocare premere F5');
}
