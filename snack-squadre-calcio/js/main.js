'use strict';

const teamsList = [
    {
        nome: 'KS Rakow Czestochowa',
        punti: 0,
        'falli-subiti': 0 
    },
    {
        nome: 'Lech Poznan',
        punti: 0,
        'falli-subiti': 0 
    },
    {
        nome: 'Legia Warszawa',
        punti: 0,
        'falli-subiti': 0 
    },
    {
        nome: 'Pogon Szczecin',
        punti: 0,
        'falli-subiti': 0 
    },
    {
        nome: 'Piast Gliwice',
        punti: 0,
        'falli-subiti': 0 
    },
    {
        nome: 'Lechia Gdansk',
        punti: 0,
        'falli-subiti': 0 
    },
    {
        nome: 'Gornik Zabrze',
        punti: 0,
        'falli-subiti': 0 
    },
    {
        nome: 'Wisla Plock',
        punti: 0,
        'falli-subiti': 0 
    }
]

teamsList.forEach(element => {
    element.punti = Math.floor(Math.random() * 42 + 1);
    element['falli-subiti'] = Math.floor(Math.random() * (150 - 30 + 1) + 30);
})

console.log(teamsList);