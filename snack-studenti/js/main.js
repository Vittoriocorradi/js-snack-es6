'use strict';


// Lista studenti con id, nome e somma dei voti
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        gradesSum: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        gradesSum: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        gradesSum: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        gradesSum: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        gradesSum: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        gradesSum: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        gradesSum: 84
    },
]


// Punto 1

// Creo una lista con solo i nomi degli studenti scritti in maiuscolo
const studentNamesUpperCase = students.map(element => {
    return element = element.name.toUpperCase();
})

console.log(studentNamesUpperCase);

// Punto 2

// Creo una lista con solo gli studenti che hanno somma dei voti maggiore a 70
const overSeventy = students.filter(element => {
    if (element.gradesSum > 70) {
        return true;
    }
})

console.log(`-----
Studenti con totale di voti superiore a 70`);
console.log(overSeventy);

// Punto 3

// Creo una lista con solo gli studenti che hanno somma dei voti maggiore a 70 e id superiore a 120
const overSeventyHighId = students.filter(element => {
    if(element.gradesSum > 70 && element.id > 120) {
        return true;
    }
})

console.log(`-----
Studenti con totale di voti superiore a 70 e id sopra 120`);
console.log(overSeventyHighId);