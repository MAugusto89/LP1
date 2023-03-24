/*npm i xmlhttprequest*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url= "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();
var list=JSON.parse(request.responseText);

const data = list.filter(dolar => dolar.native)
contador = 0;
nomePaises = [];
nomeLanguages=[];
for (let i = 0; i < data.length; i++) {
    contador++;
    nomePaises[i] = data[i].name;
    nomeLanguages[i] = data[i].native;
}
console.log(nomePaises);
console.log(nomeLanguages);

/*console.log(list[0].name);*/