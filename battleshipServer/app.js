const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

const ROW_SIZE = 5;
const COL_SIZE = 5;

const HIDDEN_EMPTY = 0;
const HIDDEN_SHIP = 1;
const SHOW_HIT = 2;
const SHOW_MISS = 3;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/data', (req, res) => {
    let obfuscatedBoard = toObfuscatedBoard(copyBoard(hiddenBoard));
    console.log(hiddenBoard);
    console.log(obfuscatedBoard);
    res.json({
        board: obfuscatedBoard,
        ROW_SIZE,
        COL_SIZE
    });
});

app.get('/api/resetBoard', (req, res) => {
    console.log("Reset board Received");
    randomizeBoard(hiddenBoard);
    res.json();
});

app.post('/api/sendShot', (req, res) => {
    let x = req.body.value.x;
    let y = req.body.value.y;
    if (hiddenBoard[y][x] === HIDDEN_EMPTY) {
        hiddenBoard[y][x] = SHOW_MISS;
    } else if (hiddenBoard[y][x] === HIDDEN_SHIP) {
        hiddenBoard[y][x] = SHOW_HIT;
    }
    res.json();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


let hiddenBoard = [];
initHiddenBoard();

console.log(hiddenBoard);

function initHiddenBoard() {
    hiddenBoard = createEmptyBoard();
    randomizeBoard(hiddenBoard);
}

function toObfuscatedBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[j][i] === HIDDEN_EMPTY || board[j][i] === HIDDEN_SHIP) {
                board[j][i] = 'hidden';
            } else if (board[j][i] === SHOW_HIT) {
                board[j][i] = 'hit';
            } else if (board[j][i] === SHOW_MISS) {
                board[j][i] = 'miss';
            }
        }
    }
    return board;
}

function copyBoard(board) {
    let copiedBoard = [];
    for (let i = 0; i < board.length; i++) {
        copiedBoard[i] = board[i].slice();
    }
    return copiedBoard;
}

function randomizeBoard(board) {
    for (let i = 0; i < ROW_SIZE; i++) {
        for (let j = 0; j < COL_SIZE; j++) {
            board[i][j] = getRandomInt(2);
        }
    }
}

function createEmptyBoard() {
    let board = [];
    for (let i = 0; i < ROW_SIZE; i++) {
        board.push([]);
        for (let j = 0; j < COL_SIZE; j++) {
            board[i][j] = 0;
        }
    }
    return board;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
