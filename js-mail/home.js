//Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato
var emailIscritte = ["matteo@gmail.com", "simone@gmail.com", "nicolo@gmail.com", "stefano@gmail.com", "luca@gmail.com", "daniel@gmail.com", "giuseppe@gmail.com"];
console.log(emailIscritte);
var emailUtente = prompt("Inserisci la tua mail per verificare se sei registrato nel nostro database");
var check = false;
var benvenuto;
for (var i = 0; i < emailIscritte.length; i++) {
  if (emailUtente === emailIscritte[i]){
    check = true;
  }
}
if (check) {
  benvenuto = "Sei benvenuto all' interno della nosta lista :D";
}else{
  benvenuto = "Riprova oppure esci prima che sia troppo tardi D:";
}
document.getElementById('mio_id').innerHTML = benvenuto;
