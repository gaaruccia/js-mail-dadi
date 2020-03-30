//Gioco dei dadi, chi fa di più vince.
var dadiUtente = Math.floor(Math.random() * 6) + 1;
alert("Hai lanciato il dado, il tuo numero è: " + dadiUtente)
console.log(dadiUtente);
var dadiCPU = Math.floor(Math.random() * 6) + 1;
alert("Il pc ha lanciato il dado, il suo numero è: " + dadiCPU)
console.log(dadiCPU);
var vincitore;
if (dadiUtente > dadiCPU) {
  vincitore = "Utente ha vinto!"
} else if (dadiUtente < dadiCPU) {
  vincitore = "Utente ha perso D:"
} else{
  vincitore = "Pareggio!"
}
document.getElementById('mio_id').innerHTML = vincitore;
