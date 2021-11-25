var express = require('express');
var app = express();

var PORT = 8000;

const fs = require('fs');
const dir = './public/pairsImages/randomImages';
const imagesDir = './pairsImages/randomImages/';
let fileSize;
let filePaths = [];

fs.readdir(dir, (err, files) => {
	fileSize = files.length;
	for (let i = 0; i < fileSize; i++) {
		filePaths.push(imagesDir + files[i]);
	}
	console.log(filePaths);
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

app.get('/Pears2.html', function(req, res) {
	console.log("pears2");
    res.sendFile('./public/pears2.html', {root: __dirname })
});

app.post('/api', (req, res) => {
	console.log(res);
});

app.get('/api', (req, res) => {
	console.log(fileSize);
	res.send({"hello": fileSize, filePaths});
});

app.use(express.static('public'));