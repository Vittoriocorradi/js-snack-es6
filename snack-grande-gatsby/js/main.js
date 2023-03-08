'use strict';


const invitati = [
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

const finalList = invitati.map((element) => {
    element = ({name: element});
    return element;
});

console.log(invitati);
console.log(finalList);

