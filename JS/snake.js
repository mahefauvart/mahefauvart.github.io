class Snake {
    constructor(size) {
        this.x = 0;
        this.y = 0;
        this.blockSize = size;
        this.blocks = [];
        this.addBlock(this.x, this.y);
    }

    addBlock(x, y) {
        const block = new Block(x, y, this.blockSize);
        this.blocks.push(block);
    }

    moveSnake() {
        const head = this.blocks[0];
        switch (current_dir) {
            case 'left':
                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break; 
            default:
                break;
        }
        head.teleportSnake();
    }

    eat() {
        const head = this.blocks[0];
        if (head.x === apple.x && head.y === apple.y) {
            apple.setRandomPos();
        }
    }

    update() {
        this.moveSnake();
        this.eat();
        for (const block of this.blocks) {
            block.draw();
        }
    }
}

class Block {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    teleportSnake() {
        const maxPos = GAME_SIZE / this.size;
        if (this.x < 0) {
            this.x = maxPos;
        } else if (this.x > maxPos) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = maxPos;
        } else if (this.y > maxPos) {
            this.y = 0;
        }
    }

    draw() {
        context.fillStyle = 'green';
        context.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}

class Apple {
    constructor() {
        this.size = SQUARE;
        this.setRandomPos();
    }

    setRandomPos() {
        const maxPos = ((GAME_SIZE / this.size) - 1);
        this.x = Math.round(Math.random() * GAME_SIZE % maxPos);
        this.y = Math.round(Math.random() * GAME_SIZE % maxPos);
    }
    
    draw() {
        context.fillStyle = 'red';
        context.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}