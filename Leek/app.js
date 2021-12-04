const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
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

let name = "EnergyBread";


fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + "?api_key=RGAPI-1cdeb6db-d68c-46c4-a02d-84fdb1a330f2")
    .then()

async function fetchSumByName(name) {
    let sum = await fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + "?api_key=RGAPI-1cdeb6db-d68c-46c4-a02d-84fdb1a330f2").then(async (response) => {
        await response.json().then((response) => {
            console.log(response);
            return response;
        });
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
