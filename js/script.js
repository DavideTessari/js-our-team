// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di 
// nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// BONUS 2:
// Organizzare i singoli membri in card/schede

// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.


// Definiamo un array di oggetti:
// - ogni elemento dell'array è un oggetto che rappresenta una classe
// - ogni classe ha le proprietà nome, ruolo e foto.
const classi = [
    {
        className: 'Wayne Barnett',
        classRole: 'Founder & CEO',
        classImage: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        className: 'Angela Carroll',
        classRole: 'Chief Editor',
        classImage: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        className: 'Walter Gordon',
        classRole: 'Office Manager',
        classImage: 'img/walter-gordon-office-manager.jpg'
    },
    {
        className: 'Angela Lopez',
        classRole: 'Social Media Manager',
        classImage: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        className: 'Scott Estrada',
        classRole: 'Developer',
        classImage: 'img/scott-estrada-developer.jpg'
    },
    {
        className: 'Barbara Ramos',
        classRole: 'Graphic Designer',
        classImage: 'img/barbara-ramos-graphic-designer.jpg'
    }
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di 
// nome, ruolo e la stringa della foto
console.log(classi);

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const mainContainer = document.querySelector('#list')
for(let i = 0; i < classi.length; i++) {
    const thisClassi = classi[i];

    const newLi = `
        <li>
            <h3>${thisClassi.className}: ${thisClassi.classRole} ---- ${thisClassi.classImage}</h3>
        </li>
    `;

    mainContainer.innerHTML += newLi;
}