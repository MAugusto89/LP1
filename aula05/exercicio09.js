/*Exercício 9: Escreva uma função que receba um array de strings e um callback
que retorna um novo array com as strings que possuem um determinado
caractere.*/

arr = ['Mação', 'Melão', 'Banana', 'Abacaxi']
function stringChar(arr, callback) {
    if (arr.charAt(0) == "M") {
        return arr;
    }
}
var resultado = arr.filter(stringChar);
console.log(resultado);