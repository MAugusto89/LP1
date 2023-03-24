/*npm i xmlhttprequest*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url= "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();
var list=JSON.parse(request.responseText);

const data = list.filter(pais => pais.name)
contador = 0;
nomePaises = [];

list.forEach(pais => {
    pais.split('')
    if (pais == 'B'){
        contador++;
        nomePaises[i] += data[i].name;
    }
    console.log(nomePaises.name);
});

/*for (let i = 0; i < data.length; i++) {
else{
        null;
    }
}
console.log(nomePaises);*/

/*console.log(list[0].name);*/