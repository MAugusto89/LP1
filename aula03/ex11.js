var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url= "https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();
var list=JSON.parse(request.responseText);

const data = list.filter(anime => anime.year)

nomeAnime = [];

for (let i = 0; i < data.length; i++) {
    if (anime == 1970 && anime == 1980) {
        nomeAnime[i] = data[i].title
    }
}

console.log(nomeAnime);