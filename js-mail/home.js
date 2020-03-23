//Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato
var emailIscritte = ["matteo@gmail.com", "simone@gmail.com", "nicolo@gmail.com", "stefano@gmail.com", "luca@gmail.com", "daniel@gmail.com", "giuseppe@gmail.com"];
var emailUtente = prompt("Inserisci la tua mail per verificare se sei registrato nel nostro database")
var benvenuto;
if (emailIscritte[0] === emailUtente) {
  benvenuto = "Sei presente nel nostro database, benvenuto :D"
}else if (emailIscritte[1] === emailUtente){
  benvenuto = "Sei presente nel nostro database, benvenuto :D"
}else if (emailIscritte[2] === emailUtente){
  benvenuto = "Sei presente nel nostro database, benvenuto :D"
}else if (emailIscritte[3] === emailUtente){
  benvenuto = "Sei presente nel nostro database, benvenuto :D"
}else if (emailIscritte[4] === emailUtente){
  benvenuto = "Sei presente nel nostro database, benvenuto :D"
}else if (emailIscritte[5] === emailUtente){
  benvenuto = "Sei presente nel nostro database, benvenuto :D"
}else if (emailIscritte[6] === emailUtente){
  benvenuto = "Sei presente nel nostro database, benvenuto :D"
}else{
  benvenuto = "Non sei presente nel nostro database, riprova o esci prima che sia troppo tardi"
}
console.log(emailIscritte);
document.getElementById('mio_id').innerHTML = benvenuto;
