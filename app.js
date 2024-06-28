const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = ['rgba(38, 209, 143, 0.795)', 'rgba(124, 238, 48, 0.795)','rgba(55, 84, 248, 0.795)','rgba(194, 82, 160, 0.795)','rgba(231, 182, 20, 0.795)','rgba(38, 33, 59, 0.795)','rgb(23, 188, 238)','rgb(121, 56, 141)']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    

    // Добавляем слушателя "Наведенее мышки на квадратик"
    square.addEventListener('mouseover', setColor);

    // Добавляем событие для удаления цвета
    square.addEventListener('mouseleave', removeColor);


    board.append(square);

};


function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    // Добавляем цвет
    element.style.backgroundColor = color;
    // Добавляем обьемный эффект
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
    

};


function removeColor(event) {
    const element = event.target;
    // Удаляем цвет 
    element.style.backgroundColor = '#1d1d1d';
    // Удаляем след 
    element.style.boxShadow = `0 0 2px #000`;
};


// Создаем случайный цвет и округляем в меньшую сторону
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};