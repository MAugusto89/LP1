/*Exercício 10: Escreva uma função que receba dois arrays e um callback que
retorna um novo array com a concatenação dos dois arrays filtrados.*/

function concatArrays(arr1, arr2, callback) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        newArray = arr1.concat(arr2);
    }
    return newArray;
}
arr1 = ['Olá']
arr2 = ['Mundo']
console.log(concatArrays(arr1, arr2));