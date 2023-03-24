/*Exercício 7: Escreva uma função que receba um array de strings e uma função
de retorno de chamada. A função deve reduzir o array com base na função
callback e retornar o valor reduzido.*/

function reduce(arr, callback) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result == arr[i];
    }
    return result;
}

arr = ['Um', 'Array', 'de', 'Strings']

console.log(reduce(arr))