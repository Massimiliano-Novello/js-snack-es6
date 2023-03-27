// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

//Creo un arrey di oggetti
const biciclette = [
    {
        nome: "Bianchi",
        peso: 15
    },
    {
        nome: "Atala",
        peso: 10
    },
    {
        nome: "Olmo",
        peso: 8
    },
    {
        nome: "Casati",
        peso: 11
    },
    {
        nome: "Colnago",
        peso: 7
    },
    {
        nome: "Bottecchia",
        peso: 9
    },
    {
        nome: "Cinelli",
        peso: 12 
    }
];

let biciLeggere = {...biciclette[0]}

biciclette.forEach ((element) => {
    const {nome, peso} = element
    if (peso < biciLeggere.peso) {
        biciLeggere.nome = nome
        biciLeggere.peso = peso
    }
})

console.log(biciLeggere);

creazioneFrase();

function creazioneFrase () {
    const container = document.querySelector(".container");
    console.log(container);
    const result = `<h2>La bicicletta ${biciLeggere.nome} pesa solo ${biciLeggere.peso}kg ed è la più leggera </h2>`;
    container.innerHTML = result;
}




