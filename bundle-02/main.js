/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1:
// errore logico: message deve essere una variabile let perché cambia a seconda del caso
function checkAge() {
    const myAge = 12;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }

    console.log(message);
}
checkAge();


// ESERCIZIO 2
// errore di sintassi: lenght è scritto male
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();


// ESERCIZIO 3
// errore di logica e sintassi: dal momento che devo inserire un numero, dopo il prompt devo aggiungere il metodo parseInt
// function addNumbers() {
//     const userNumber = prompt(parseInt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// ESERCIZIO 4
// errore di sintassi e di logica: i valori booleani non hanno bisogno degli apici

// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }

// checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
//errore di sintassi: manca la chiusura della parentesi graffa dell'intera funzione

function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
        
        if (userEmail.length > 5) {
            
            if (email === userEmail) {
            grantAccess = 'true';                
            }
        
        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
checkAccessImproved();