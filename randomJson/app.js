const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const STATES = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
const FIRST_NAMES = ['Tom', 'Ronny', 'Lauren', 'Alan', 'Battmandul', 'Linnea','Braydon','Caleb','Sidney','Anniston','Matthew','Mila','Julian','Chance','Emmaleigh','Rashawn','Laurel','Kaitlyn','Kyndal','Laurel','Aspen','Markel','Brogan','Zelda','Bryton','Maison','Kaylani','Hayleigh','Zyon','Ariel','Izaac','Klara','Briar','Jaleah','Margot','Phoenix','Addison','Eliyahu','Jasmin','Alexandria','Leyla','Aubrey','Ahmir','Rome','Ahmir','Geneva','Jaxen','Kamari','Zakaria','Aliyana','Catherine','Serenity','Nariah','Barrett','Annabel'];
const LAST_NAMES = ['Hong,', 'Wang', 'Ritprasert', 'Miyamoto', 'Zac', 'Battmandul', 'Batt', 'Calvert','Xiong','Wood','Cohen','Horne','Perez','Payne','Haines','London','Burkett','Saunders','Kauffman','Vickers','Mayberry','Murray','Rollins','Love','Harden','Gutierrez','Ogden','Reed','Davison','Sanchez','Baldwin','Moyer','Stovall','Webster','Cash','Gregg','Stafford','Singer','Clemons','Lackey','Thayer','Louis','Hope','Combs','Masters','Barron','Johnston','Wood','Baird','Leblanc','Sawyer','Pendleton','Bush','Franco','Mccabe','Fair','Cotton'];
const STREET_NAMES = ['Peace','Lowland','Aviation','Orchard','Blessing','Crescent','Storm','North','Orchid','Broom','Vista','Snowflake','Museum','Walnut','Lilypad','Vale','Broom','Market','Justice','Nightingal','Feathers','Summit','Luna','Lotus','Sapphire','Yew','Mill','Anchor','Museum','Farmer','Sunshine','Poplar','Beach','Broad','Prince','Bright','Cavern','Highland','Copper','Heirloom','King','Redwood','Sunny','Bell','Arcade','Trinity','Sunny','Vista','Snowflake','Snowflake','Commercial','Arctic','Senna','Silver','Forest','Serenity','Orchid','Oak','Colonel','Heart','Water','River','Kings','Timber','Acorn','Elmwood','Moon','University','Union','Legend','Grotto','Timber','Berry','Coach','Penrose','Vista','Moonlight','Grand','Cross','Luna','Rowan','Crescent','Nova','College','Mandarin','Centre','Aviation','Ocean','Lower','Justice','Heritage','Serenity','Shadow','Granite','Grotto','Little','Monument','Summer','Green','Centre'];
const STREET_SUFFIXES = ['Row','Passage','Route','Way','Avenue','Lane','Street','Boulevard','End','Court','Cross','Side','Place','View','Walk','Park','Meadow','Green','Quadrant','Gate','Gait','Wynd'];
const CITIES = ['Bandle City','Bilgewater','Demacia','Ionia','Ixtal','Noxus','Piltover','Shadow Isles','Shurima','Targon','The Freljord','The Void','Zaun'];

let addresses;

let name;
let streetNum;
let streetName;
let streetSuffix;
let city;
let state;
let zipCode;

let personDetails = generateAllDetails();

function generateAllDetails() {
    name = getRandomName();
    streetNum = getRandomNumber(4);
    streetName = getRandomValue(STREET_NAMES);
    streetSuffix = getRandomValue(STREET_SUFFIXES);
    city = getRandomValue(CITIES);
    state = getRandomValue(STATES);
    zipCode = getRandomNumber(4);
    console.log(name, streetNum, streetName, streetSuffix, city, state, zipCode);
    return {
        name,
        street: buildStreetAddress(streetNum, streetName, streetSuffix),
        city,
        state,
        zipCode
    }
}

function buildStreetAddress(streetNum, streetName, streetSuffix) {
    return streetNum + " " + streetName + " " + streetSuffix;
}

function getRandomName() {
    return (getRandomInt(2) ? getRandomValue(FIRST_NAMES) : getRandomValue(LAST_NAMES)) + " " + (getRandomInt(2) ? getRandomValue(FIRST_NAMES) : getRandomValue(LAST_NAMES));
}

function getRandomValue(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function getRandomNumber(length) {
    let res = "";
    for (let i = 0 ; i < length; i++) {
        let randomInt = getRandomInt(10);
        res += randomInt;
    }
    return res;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/data', (req, res) => {
    res.json({personDetails});
});

app.get('/api/generateData', (req, res) => {
    personDetails = generateAllDetails();
    res.json({personDetails});
});

app.post('/api/addRandomAddress', (req, res) => {

    res.json();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


