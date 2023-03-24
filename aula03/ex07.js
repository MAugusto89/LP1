/*npm i xmlhttprequest*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url= "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();
var list=JSON.parse(request.responseText);

const data = list.filter(capitais => capitais.capital)

nomePaises = [];
nomeCapitais=[];
for (let i = 0; i < data.length; i++) {
    nomePaises[i] = data[i].name;

    nomeCapitais[i] = data[i].capital;
}
console.log(nomePaises);
console.log(nomeCapitais);

/*console.log(list[0].name);*/