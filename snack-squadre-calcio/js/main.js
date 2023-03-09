'use strict';

// Lista delle squadre
const teamsList = [
    {
        nome: 'KS Rakow Czestochowa',
        punti: 0,
        falli: 0 
    },
    {
        nome: 'Lech Poznan',
        punti: 0,
        falli: 0 
    },
    {
        nome: 'Legia Warszawa',
        punti: 0,
        falli: 0 
    },
    {
        nome: 'Pogon Szczecin',
        punti: 0,
        falli: 0 
    },
    {
        nome: 'Piast Gliwice',
        punti: 0,
        falli: 0 
    },
    {
        nome: 'Lechia Gdansk',
        punti: 0,
        falli: 0 
    },
    {
        nome: 'Gornik Zabrze',
        punti: 0,
        falli: 0 
    },
    {
        nome: 'Wisla Plock',
        punti: 0,
        falli: 0 
    }
]

// Assegno numeri casuali a punti e a falli
teamsList.forEach(element => {
    element.punti = Math.floor(Math.random() * 42 + 1);
    element.falli = Math.floor(Math.random() * (150 - 30 + 1) + 30);
})

console.log('Lista delle squadre con nome, punti fatti e falli subiti');
console.log(teamsList);

// Creo una nuova lista delle squadre tralasciando i punti fatti
let listWithoutScore = teamsList.map(({punti, ...rest}) => rest);

console.log('Lista delle squadre con nome e falli subiti');
console.log(listWithoutScore);