'use strict';

// Lista invitati
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
]

// Lista di oggetti con nome dell'invitato
const finalList = guests.map((element, index) => {
    return element = {name: element};
});

// Aggiungo il nome del tavolo e il posto a ogni invitato
finalList.forEach((element, index) => {
    element.table = 'Tavolo Vip';
    element.seat = index + 1;
})

// Lista finale
console.log(finalList);