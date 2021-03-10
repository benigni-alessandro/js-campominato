var soldatino = true;
while (soldatino) {
  var livello = prompt("0=difficoltà 0, 1=difficoltà 1, 2=difficoltà 2");
  switch (livello) {
    case  '0':
    var bombzone =[];
    var safezone = [];
    var massimo = 100;
    console.log(numeribomba(bombzone, 100));
    var punteggio = ("Il tuo punteggio è: " + gioco(bombzone, safezone, massimo));
    console.log(punteggio);
    soldatino = false;
    break;
    case  '1':
    var bombzone =[];
    var safezone = [];
    var massimo = 80;
    console.log(numeribomba(bombzone, 80));
    var punteggio = (gioco(bombzone, safezone, massimo));
    console.log(punteggio);
    soldatino = false;
    break;

    case  '2':
    var bombzone =[];
    var safezone = [];
    var massimo = 50;
    console.log(numeribomba(bombzone, 50));
    var punteggio = (gioco(bombzone, safezone, massimo));
    console.log(punteggio);
    soldatino = false;
    break;
    default:
    soldatino = true;
    break;
  }


}

function numeribomba(bombas, max) {
  while (bombas.length < 16) {
    var numero = randomnumber(1, max)

    if (!bombas.includes(numero)) {
      bombas.push(numero)
    }
  }
  return bombas;
}
function randomnumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gioco(bombzone, safezone, massimo) {
  while (safezone.length < massimo - 16) {
    var numero_utente = parseInt(prompt("dimmi un numero da 1 a " + massimo));
    if (!isNaN(numero_utente) && 1 <= numero_utente && numero_utente <= massimo && !safezone.includes(numero_utente)){
      if (!bombzone.includes(numero_utente)) {
        safezone.push(numero_utente)
      } else {
        return safezone.length
      }
    }
  }
  return safezone.length
}
