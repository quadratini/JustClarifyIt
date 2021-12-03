const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/data', (req, res) => {
    res.json({
        board
    });
});

app.post('/move', (req, res) => {
    let x = req.body.value.x;
    let y = req.body.value.y;
    console.log(req.body.value);
    if (board[y][x] === 0) {
        board[y][x] = "miss";
    } else {
        board[y][x] = "hit";
    }
    res.json();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const ROW_SIZE = 5;
const COL_SIZE = 5;

let board = [];
let coordinates = {
    x: -1,
    y: -1
}

initHiddenBoard();
console.log(board);

function handleClick() {

}

function initHiddenBoard() {
    for (let i = 0; i < ROW_SIZE; i++) {
        board.push([]);
        for (let j = 0; j < COL_SIZE; j++) {
            let randomInt = getRandomInt(2);
            if (randomInt === 0) {
                board[i][j] = 0;
            } else {
                board[i][j] = 1;
            }
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
