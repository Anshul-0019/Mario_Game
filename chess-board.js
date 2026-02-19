const canvas = document.getElementById('chessBoard');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

const boardSize = 8; 
const tileSize = canvas.width / boardSize; 

function drawBoard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {

            if ((row + col) % 2 === 0) {
                ctx.fillStyle = '#FFFFFF'; 
            } else {
                ctx.fillStyle = '#000000';
            }
            ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
        }
    }
}

drawBoard();