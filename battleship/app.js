const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');

const app = express();

var hbs = exphbs.create({
    helpers: {
        sayHello: function () { alert("Hello World") },
        getStringifiedJson: function (value) {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.static('public'));

const dir = './public/pairsImages/randomImages';
const imagesDir = './pairsImages/randomImages/';
let fileSize;
let filePaths = [];

fs.readdir(dir, (err, files) => {
    fileSize = files.length;
    for (let i = 0; i < fileSize; i++) {
        filePaths.push(imagesDir + files[i]);
    }
});

app.get('/', (req, res) => {
    res.render('home3', {
        filePaths: filePaths,

    });
});

console.log("listening");
app.listen(3000);
