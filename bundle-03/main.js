/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
//1-2 errore di sintassi: mancava una virgola al penultimo oggetto e l'ultimo non aveva bisogno della virgola
//3: nel primo array filtrato l'arrow funcition ha errore di sintassi >=
//4 errore di sintassi: le arrow function devono avere il return quando ci sono le parentesi graffe (nel secondo filtro) - oppure se non ci sono le graffe scrivere return non è necessario
//5 errore di logica: ad auto.type bisogna aggiungere il metodo toLowerCase() per poter comparare stringhe alle stesse condizioni
//6 errore di logica: l'operatore del filtro finale è AND e non OR 

const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    }
];

const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel';
});

console.log('Auto a benzina');
console.log(gasolineCars);
console.log('*******************************');

console.log('Auto a diesel');
console.log(dieselCars);
console.log('*******************************');

console.log('Tutte le altre auto');
console.log(otherCars);
console.log('*******************************');