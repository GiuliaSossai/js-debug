/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1:
// è un ciclo for
// c'è un errore logico: se i=0 non può essere anche maggiore di 5

// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
        console.log('es 1:', i);
    }


// ESERCIZIO 2
// è una funzione che verifica se il numero che indico come parametro è un numero pari; se lo è, restituisco il numero più cinque
// l'errore è di logica e di sintassi: dentro la condizione ci deve essere un'uguaglianza
function addIfEven(num) {
    if (num % 2 === 0) {
        console.log('numero', num);
        return num + 5;
    }
    //return num;
}

console.log('funzione', addIfEven(8));


// ESERCIZIO 3
// è una funzione con ciclo for
// errore di sintassi: al posto delle virgole bisogna mettere il punto e virgola
//errore di logica: i deve essere minore o uguale a 5 visto che la funzione si chiama loop to five, altrimenti il ciclo arriverebbe fino a 4

// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
loopToFive();

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//è una funzione che a partire da un array di numeri restituisce l'array dei numeri pari presenti nell'array padre
// 1-2: dentro ciclo for c'è un ; di troppo alla fine e 'i' deve essere minore o uguale;
// 3: dentro la condizione if ci deve essere un'uguaglianza
// 4: il return va fuori dal ciclo for
// 5-6: al push e nell'if non ci va i ma ci va numbers[i]
// 7: c'è ; di troppo dopo la condizione if


function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }    
    }
    return evenNumbers;
}
displayEvenNumbers();
console.log(displayEvenNumbers());