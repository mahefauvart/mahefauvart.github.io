const GAME_SIZE = 600;
const SQUARE = 20;
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const snake = new Snake(SQUARE);
const apple = new Apple();
let current_dir = "right";

function listenKeyPressed() {
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowLeft':
                current_dir = 'left';
                break;
            case 'ArrowRight':
                current_dir = 'right';
                break;
            case 'ArrowUp':
                current_dir = 'up'
                break;
            case 'ArrowDown':
                current_dir = 'down';
                break;
            default:
                break;
        }
    });
}

function clearScreen() {
    context.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function update() {
    clearScreen();
    apple.draw();
    snake.update();
    setTimeout(update, 150);
}

function start_game() {
    listenKeyPressed();
    update();
}

start_game();