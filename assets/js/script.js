

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

let divElem = document.querySelector('ul');
//console.log(divElem);

// Stampo in console ogni oggetto e i dati conenuti in esso
for (let i = 0; i < teamMembers.length; i++) {

    //console.log(teamMembers[i]);

    for (let key in teamMembers[i]) {
        
        console.log(teamMembers[i][key]);

        let liElem = document.createElement('li');
        liElem.innerHTML = teamMembers[i][key];
        //console.log(liElem);
        
        divElem.appendChild(liElem);

    }

}


