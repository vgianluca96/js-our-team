

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

// Seleziono l'elemento con id row
let rowElem = document.getElementById('row');
//console.log(rowElem);

// Stampo in console ogni oggetto e i dati conenuti in esso
for (let i = 0; i < teamMembers.length; i++) {

    //console.log(teamMembers[i].name);
    //console.log(teamMembers[i].role);
    //console.log(teamMembers[i].img);

    let cardToInsert = `
    <div class="col col-6 col-md-4">
        <div class="card">
            <img src="./assets/img/${teamMembers[i].img}" class="card-img-top" alt="">
            <div class="card-body">
                <div class="card-title">${teamMembers[i].name}</div>
                <div class="card-text">${teamMembers[i].role}</div>
            </div>
        </div>
    </div>
    `;

    rowElem.innerHTML += cardToInsert;

}

