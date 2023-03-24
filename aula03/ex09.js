var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url= "https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();
var list=JSON.parse(request.responseText);

const data = list.filter(anime => anime.title)
contador = 0;
for (let i = 0; i < data.length; i++) {
    contador++;
}
console.log(`Existe um total de ${contador} animes`);