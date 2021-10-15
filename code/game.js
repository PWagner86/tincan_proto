const btn = document.querySelector('.submit button');
const text = document.querySelector('.form form h3');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    text.innerHTML = 'Erfolgreich Teilgenommen. Viel Glück';
})