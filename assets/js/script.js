

// Creo array di oggetti con i dati dei membri del team
const teamMembers = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    },

];

// Seleziono l'elemento con id 'row'
let rowElem = document.getElementById('row');
//console.log(rowElem);

// Per ogni membro creo una card da stampare in pagina
for (let i = 0; i < teamMembers.length; i++) {

    //console.log(teamMembers[i].name);
    //console.log(teamMembers[i].role);
    //console.log(teamMembers[i].img);

    // Creo HTML della card
    let cardToInsert = `
    <div class="col">
        <div class="card text-bg-dark">
            <img src="./assets/img/${teamMembers[i].img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${teamMembers[i].name}</h5>
                <p class="card-text">${teamMembers[i].role}</p>
            </div>
        </div>
    </div>
    `;

    // Aggiungo l'HTML della card nell'elemento 'row'
    rowElem.innerHTML += cardToInsert;

}

