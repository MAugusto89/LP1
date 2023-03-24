/*Exercício 1: Escreva uma função que receba uma matriz de números e uma
função de retorno de chamada. A função deve percorrer a matriz e chamar a
função de retorno de chamada com cada elemento da matriz.*/

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach([1, 2, 3], (num) => console.log(num));