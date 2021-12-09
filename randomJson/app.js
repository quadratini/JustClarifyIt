const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


const fetch = require('node-fetch');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/addRandomAddress', (req, res) => {
    (async () => {
        try {
            await fetch('http://localhost:3001/api/addRandomAddress')
                .then(r => r.json())
                .then(response => res.json(response));
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    })();
});

app.get('/addRandomAddress25', (req, res) => {
    (async () => {
        try {
            await fetch('http://localhost:3001/api/addRandomAddress25')
                .then(r => r.json())
                .then(response => res.json(response));
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    })();
});

app.get('/search', (req, res) => {
    res.sendFile(__dirname + '/search.html');
});

app.get('/search2', (req, res) => {
    (async () => {
        try {
            await fetch('http://localhost:3001/api/search')
                .then(r => r.json())
                .then(response => res.json(response));
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    })();
});

app.get('/address/:id', (req, res) => {
    res.sendFile(__dirname + '/address.html');
});

app.get('/address', (req, res) => {
    res.sendFile(__dirname + '/addressList.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
