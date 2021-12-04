const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/data', (req, res) => {
    res.json();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
