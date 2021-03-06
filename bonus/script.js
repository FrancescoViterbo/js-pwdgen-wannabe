
/* Selettori */

var nome = document.getElementById("name");
var cognome = document.getElementById("surname");
var colore = document.getElementById("color");
const button = document.getElementById("btn");
const nameAlert = document.getElementById("name-alert");
const surnameAlert = document.getElementById("surname-alert");



/* Event listener */

button.addEventListener("click", popup);

/* Processo i dati per verificare la presenza di errori e creo la password */
function popup(event){
    /* Prevengo il ricaricamento automatico della pagina */
    event.preventDefault();

    let nomeval = nome.value;
    let cognomeval = cognome.value;
    let coloreval = colore.value;
    /* Se uno dei campi è vuoto o contiene un numero di caratteri non valido invio messaggio di errore */
    if (nomeval.length < 2 || nomeval.length > 24 || cognomeval.length < 2 || cognomeval.length > 24){
        if(nomeval === ""){
            nameAlert.innerHTML = "Devi inserire un nome nel campo soprastante.";
            nameAlert.style.padding = "0.3rem 0.4rem";
            nome.style.margin = "2rem auto 1rem auto";
        } else if(nomeval.length < 2 || nomeval.length > 24){
            nameAlert.innerHTML = "Il nome inserito deve essere composto da un numero di caratteri compreso tra 2 e 24";
            nameAlert.style.padding = "0.3rem 0.4rem";
            nome.style.margin = "2rem auto 1rem auto";
        }
        if (cognomeval === ""){
            surnameAlert.innerHTML = "Devi inserire un nome nel campo soprastante.";
            surnameAlert.style.padding = "0.3rem 0.4rem";
            cognome.style.margin = "2rem auto 1rem auto";
            colore.style.margin = "2rem auto 0 auto";
        } else if(cognomeval.length < 2 || cognomeval.length > 24){
            surnameAlert.innerHTML = "Il cognome inserito deve essere composto da un numero di caratteri compreso tra 2 e 24";
            surnameAlert.style.padding = "0.3rem 0.4rem";
            cognome.style.margin = "2rem auto 1rem auto";
            colore.style.margin = "2rem auto 0 auto";
        }
    } else {
        /* Se i campi sono compilati ed i dati contengono il giusto numero di caratteri genero la password */

        /* Generatore di un numero casuale fra 0 e 99 */
        let number = Math.floor(Math.random() * 100);

        /* Se non è stato scelto un colore se ne prende uno casuale */

        if(coloreval === ""){
            /* Generatore di un colore casuale */
            let colors = ["rosso", "arancione", "giallo", "verde", "azzurro", "blu", "viola"];
            let colorNumber = Math.floor(Math.random() * colors.length);
            let randomColor = colors[colorNumber];

            window.alert("La tua password è:\n" + nomeval + cognomeval + randomColor + number);
        } else {
            window.alert("La tua password è:\n" + nomeval + cognomeval + coloreval + number);
        }
        /* Svuoto i campi del form */
        nome.value = "";
        cognome.value = "";
        colore.value = "";
        /* Svuoto i campi contenenti eventuali messaggi di errore */
        nameAlert.innerHTML = "";
        surnameAlert.innerHTML = "";
        /* Aggiusto margin e padding */
        nameAlert.style.padding = "0";
        nome.style.margin = "1rem auto 0 auto";
        surnameAlert.style.padding = "0";
        cognome.style.margin = "1rem auto 0 auto";
        colore.style.margin = "1rem auto 0 auto";
    }
}

