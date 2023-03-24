var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url= "https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();
var list=JSON.parse(request.responseText);

const data = list.filter(anime => anime.title);

nomeAnime = [];
qtdeEpsiodes = [];

for (let i = 0; i < data.length; i++) {
    nomeAnime[i] = data[i].title;

    qtdeEpsiodes = data[i].episodes;
}

console.log(nomeAnime);
console.log(qtdeEpsiodes);