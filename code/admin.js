const db = [
    {
        id: 1,
        name: 'Peter Wagner',
        phone: '0123456789',
        adress: 'Musterstrasse 20, 9999 Musterheim',
        email: 'muster@muster.com',
        date: '01.10.2021'
    },
    {
        id: 2,
        name: 'Franz Müller',
        phone: '0123456789',
        adress: 'Musterstrasse 20, 9999 Musterheim',
        email: 'muster@muster.com',
        date: '01.10.2021'
    },    {
        id: 3,
        name: 'Mira Kunz',
        phone: '0123456789',
        adress: 'Musterstrasse 20, 9999 Musterheim',
        email: 'muster@muster.com',
        date: '08.10.2021'
    },    
    {
        id: 4,
        name: 'Freddy Egg',
        phone: '0123456789',
        adress: 'Musterstrasse 20, 9999 Musterheim',
        email: 'muster@muster.com',
        date: '08.10.2021'
    },
    {
        id: 5,
        name: 'Amanda Schmidt',
        phone: '0123456789',
        adress: 'Musterstrasse 20, 9999 Musterheim',
        email: 'muster@muster.com',
        date: '01.10.2021'
    },
    {
        id: 6,
        name: 'Hans Ulrich',
        phone: '0123456789',
        adress: 'Musterstrasse 20, 9999 Musterheim',
        email: 'muster@muster.com',
        date: '01.10.2021'
    },
    {
        id: 7,
        name: 'Jasmin Meili',
        phone: '0123456789',
        adress: 'Musterstrasse 20, 9999 Musterheim',
        email: 'muster@muster.com',
        date: '15.10.2021'
    }
];

const tlBtn = document.querySelector('.input button');
const winBtn = document.querySelector('.winner button');
const winner = document.querySelector('.winner h3');
const dateInput = document.querySelector('#date');
const tlList = document.querySelector('.tl-list');
const tlArray = [];

tlBtn.addEventListener('click', (e) => {
    tlArray.splice(0, tlArray.length);
    tlList.innerHTML = '';
    winner.innerHTML = '';
    let data = false;
    db.forEach(tl => {
        if(tl.date === dateInput.value){
            data = true;
            const li = document.createElement('li');
            li.innerHTML = tl.name;
            tlList.append(li);
            tlArray.push(tl);
        }
    });
    if(!data){
        tlList.innerHTML = '<li>Noch keine Teilnehmer</li>';
        tlArray.splice(0, tlArray.length);
    }
});

winBtn.addEventListener('click', (e) => {
    winner.innerHTML = '';
    let random = Math.floor(Math.random() * tlArray.length);
    if(tlArray[random] === undefined){
        winner.innerHTML = 'Noch keine Teilnehmer. Bitte anders Datum auswählen.'
    }else{
        winner.innerHTML = tlArray[random].name;
    }    
});



