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
	
	getData();
	
	async function getData() {
		let response = await fetch('/api');
		let data = await response.json();
		console.log(data);
		
		let rowSizeInput = document.getElementById("rowSize");
		let colSizeInput = document.getElementById("colSize");
		let game = document.getElementById("game");
		let startButton = document.getElementById("startButton");
		let rowSize = rowSizeInput.value;
		let colSize = colSizeInput.value;
		
		if (rowSize % 2 == 1 || colSize % 2 == 1) {
			document.getElementById("hint").hidden = false;
			return;
		}
		document.getElementById("hint").hidden = true;
		
		const numCards = rowSize * colSize;

		let cardCover = "./pairsImages/cardCovers/cover.png";
		let imagePaths = data['filePaths'];
		//let imagePaths = data['filePaths'][0].split(',');
		
		console.log(document.createElement("div"));
		let rows = [];
		for (let i = 0; i < rowSize; i++) {
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
		
		let allCardValues = [];
		for (let i = 0; i < numCards / 2; i++) {
			let face = imagePaths[i];
			for (let j = 0; j < 2; j++) {
				let randomIndex = getRandomInt(numCards);
				while (typeof allCardValues[randomIndex] !== "undefined") {
					randomIndex = getRandomInt(numCards);
				}
				allCardValues[randomIndex] = face;
			}
		}
		
		console.log(allCardValues);

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
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
