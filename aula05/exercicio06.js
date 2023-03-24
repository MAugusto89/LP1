/*Exercício 6: Escreva uma função que receba uma matriz de números e uma
função de retorno de chamada. A função deve reduzir o array com base na
função callback e retornar o valor reduzido.*/

function reduce(arr, callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}

console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (a, b) => a + b, 0));