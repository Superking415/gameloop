const object = document.getElementById('object');
const gameContainer = document.getElementById('game-container');

let positionX = 0;
let positionY = 0;
let speedX = 2;
let speedY = 2;

function update() {
    positionX += speedX;
    positionY += speedY;

    if (positionX <= 0 || positionX >= gameContainer.clientWidth - object.clientWidth) {
        speedX = -speedX;
    }

    if (positionY <= 0 || positionY >= gameContainer.clientHeight - object.clientHeight) {
        speedY = -speedY;
    }

    object.style.left = positionX + 'px';
    object.style.top = positionY + 'px';
    

    requestAnimationFrame(update);
}

update();
