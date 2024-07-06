
const btnBiscoito = document.querySelector('#btnAbrirBiscoito');
const btnAbrirOutro = document.querySelector('.novoBiscoito');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');


btnBiscoito.addEventListener('click', function() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
});

btnAbrirOutro.addEventListener('click', function(){
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
})

