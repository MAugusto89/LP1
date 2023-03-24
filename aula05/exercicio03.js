/*Exercício 3: Escreva uma função que receba um array de strings e uma função
de retorno de chamada. A função deve percorrer a matriz e chamar a função de
retorno de chamada com cada string na matriz.*/

function forEachString(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEachString(["hello", "world"], (str) => console.log(str));