/*Exercício 5: Escreva uma função que receba um array de strings e uma função
de retorno de chamada. A função deve filtrar a matriz com base na função de
retorno de chamada e retornar a matriz filtrada.*/

function filtrar(arr, func, callback) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][func] == callback) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}
callback = ['a', 'b', 'c', 'd']
console.log(filtrar(['a','c']))