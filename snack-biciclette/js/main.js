'use strict';

// Lista biciclette con nomi e pesi
const bikeList = [
    {
        nome: 'Elops',
        peso: 10.4
    },
    {
        nome: 'Triban',
        peso: 9.2
    },
    {
        nome: 'Alpina',
        peso: 11.3
    },
    {
        nome: 'Riverside',
        peso: 10.2
    },
    {
        nome: 'Rockrider',
        peso: 8.9
    },
    {
        nome: 'Holanda',
        peso: 9.7
    }
]

// Creo una variabile infinito come paragone superiore
let weight = Number.POSITIVE_INFINITY;
let lightestBike = '';

// Ciclo la lista delle bici per vedere quale è la più leggera e la assegno a lightestBike
bikeList.forEach((element) => {
    const {peso} = element;
    if (peso < weight) {
        weight = peso;
        lightestBike = element;
    }
})

// Destrutturo l'oggetto in due variabili
const {nome, peso} = lightestBike;

// Stampo la bicicletta più leggera
console.log(`La bicicletta ${nome} è la più leggera con un peso di ${peso}kg`);