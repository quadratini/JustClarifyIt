const riotKey = 'RGAPI-1cdeb6db-d68c-46c4-a02d-84fdb1a330f2';

console.log(fetchSumByName("EnergyBread"));

async function fetchSumByName(name) {
    return await fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name, {});
}
