const body = document.querySelector('body');
const btnDark = document.querySelector('#btn-dark');
const btnLight = document.querySelector('#btn-light');
const btnGreen = document.querySelector('#btn-green');
const btnRed = document.querySelector('#btn-red');

// Прослушиваем событие клика
btnDark.addEventListener('click', () => {
    switchColor('bgc__dark');
});

btnLight.addEventListener('click', () => {
    switchColor('bgc__light');
});

btnGreen.addEventListener('click', () => {
    switchColor('bgc__green');
});

btnRed.addEventListener('click', () => {
    switchColor('bgc__red');
});

// Функция для изменения цвета фона
function switchColor(colorClass) {
    body.classList.remove('bgc__dark');
    body.classList.remove('bgc__light');
    body.classList.remove('bgc__green');
    body.classList.remove('bgc__red');
    body.classList.add(colorClass);
};