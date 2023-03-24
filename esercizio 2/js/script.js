// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//Creo un arrey di oggetti

const squadre = [
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Lazio",
        punti: 0,
        falli: 0
    }
];


//Genero numeri random
squadre.forEach ((item) => {
    item.punti = getRndInteger(1,100);
    item.falli = getRndInteger(1,100);
})
const nuoveSquadre = squadre.map(({ nome, falli }) => ({ nome, falli }));
console.log(squadre);
console.log(nuoveSquadre);

//FUNZIONE
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  