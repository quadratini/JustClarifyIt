


function startGame() {
	let data2 = {
		"test": "orange",
		"test2": "banana"
	}
	let options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
	};
	
	async function fetchData() {
		let response = await fetch('/api')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				return data;
			});
	};
	
	let response = async () => {console.log(fetchData())};
	//console.log(response());
	

	let rowSizeInput = document.getElementById("rowSize");
	let colSizeInput = document.getElementById("colSize");
	let game = document.getElementById("game");
	let startButton = document.getElementById("startButton");
	let rowSize = rowSizeInput.value;
	let colSize = colSizeInput.value;
	
	const numCards = rowSize * colSize;

	let cardCover = "./pairsImages/cardCovers/cover.png";
	let imagePaths = [
		"./pairsImages/randomImages/buld.jpg",
		"./pairsImages/randomImages/me.jfif",
		"./pairsImages/randomImages/spread.jpg",
		"./pairsImages/randomImages/moonwalk.gif"
	]
	
	let rows = [];
	for (let i = 0; i < rowSize; i++) {
		let row = [];
		let newDiv = document.createElement("div");
		for (let j = 0; j < colSize; j++) {
			let newImg = document.createElement("img");
			newImg.id = "cover" + ((j + 1) + (i * colSize));
			newImg.src = cardCover;
			newDiv.appendChild(newImg);
		}
		console.log(newDiv);
		rows.push(newDiv);
	}
	
	for (let i = 0; i < rows.length; i++) {
		game.appendChild(rows[i]);
	}
	
	// get elements
	let cards = [];
	for (let i = 0; i < numCards; i++) {
		cards[i] = document.getElementById("cover" + (i+1));
	}
	console.log(cards);
	
	// assign values to the cards
	let faces = [];
	for (let i = 0; i < imagePaths.length; i++) {
		faces[i] = imagePaths[i];
	}
	
	let allCardValues = [];
	for (let i = 0; i < faces.length; i++) {
		let face = faces[i];
		for (let j = 0; j < 2; j++) {
			let randomIndex = getRandomInt(numCards);
			while (typeof allCardValues[randomIndex] !== "undefined") {
				randomIndex = getRandomInt(numCards);
			}
			allCardValues[randomIndex] = face;
		}
	}

	let pairArray = [];
	let prevCard = null;
		for (let i = 0; i < numCards; i++) {
		cards[i].addEventListener("click", async function() {
			pairArray.push(allCardValues[i]);
			cards[i].src = allCardValues[i];
			
			let cardSrc = cards[i].getAttribute("src");
			if (prevCard == null) {
				prevCard = cards[i]; 
			}
			if ((pairArray[0] == pairArray[1])){ // matching pair
				console.log("match");
			} else if (pairArray.length == 2) { // no match
				console.log("no match");
				await sleep(1000);
				// return cards to cover
				prevCard.src = cardCover;
				for (let j = 0; j < numCards; j++) {
					prevCard.src = cardCover;
					if (cards[j].getAttribute("src") == cardSrc) {
						cards[j].src = cardCover;
					}
				}		
			}
		
			if (pairArray.length == 2) {
				pairArray = [];
				prevCard = null;
			}
		});
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
