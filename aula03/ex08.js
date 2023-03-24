/*npm i xmlhttprequest*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const url= "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json";
var request = new XMLHttpRequest();
request.open('GET', url, /* async = */ false);
request.send();
var list=JSON.parse(request.responseText);

const data = list.filter(moedaLocale => moedaLocale.currency_name)

moedaCountrie = [];
nomePaises = [];

for (let i = 0; i < data.length; i++) {
    moedaLocale.split('')
    if (moedaLocale == 'd') {
        nomePaises[i] = data[i].name;
        moedaCountrie[i] = data[i].currency_name;
    }
}
console.log(nomePaises);
console.log(moedaCountrie);

/*console.log(list[0].name);*/