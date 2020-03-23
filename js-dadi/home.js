//Gioco dei dadi, chi fa di più vince.
var dadiUtente = Math.floor(Math.random() * 6) + 1;
var dadiCPU = Math.floor(Math.random() * 6) + 1;
var vincitore;
if (dadiUtente > dadiCPU) {
  vincitore = "Utente ha vinto!"
} else if (dadiUtente < dadiCPU) {
  vincitore = "Utente ha perso D:"
} else{
  vincitore = "Pareggio!"
}
console.log(dadiUtente);
console.log(dadiCPU);
document.getElementById('mio_id').innerHTML = vincitore;
