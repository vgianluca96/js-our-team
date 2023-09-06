

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

// Seleziono i vari elementi del form
let inputName = document.getElementById('inputName');
let inputLastName = document.getElementById('inputLastName');
let inputRole = document.getElementById('inputRole');
let btnInsert = document.getElementById('btnInsert');
let btnRemove = document.getElementById('btnRemove');
// Inizializzo un contatore per le immagini random
let contatorePicsum = 1;

// Creo event listener per aggiungere membro
btnInsert.addEventListener('click', function () {

    let inputNameValue = inputName.value;
    let inputLastNameValue = inputLastName.value;
    let inputRoleValue = inputRole.value;

    if (inputNameValue == '' || inputRoleValue == '' || inputLastNameValue == '') {

        alert('Tutti i campi devono essere compilati');

    } else {

        inputNameValue = inputNameValue + ' ' + inputLastNameValue;

        // Creo HTML della card
        let cardToInsert = `
        <div class="col">
            <div class="card text-bg-dark">
                <img src="https://picsum.photos/400/429?random=${contatorePicsum}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${inputNameValue}</h5>
                    <p class="card-text">${inputRoleValue}</p>
                </div>
            </div>
        </div>
        `;

        // Aggiorno contatore immagini
        contatorePicsum++;

        // Aggiungo l'HTML della card nell'elemento 'row'
        rowElem.innerHTML += cardToInsert;

        // Creo oggetto membro e lo aggiungo all'array teamMembers
        newMember = {
            name: inputNameValue,
            role: inputRoleValue,
            img: 'Lorem Picsum'
        };
        teamMembers.push(newMember);
        console.log(teamMembers)

    }

})

// Creo event listener per l'ultimo membro
btnRemove.addEventListener('click', function () {

    //console.log(rowElem.lastElementChild);
    rowElem.lastElementChild.remove();

    teamMembers.pop();
    console.log(teamMembers);

})