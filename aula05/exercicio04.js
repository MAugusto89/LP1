/*Exercício 4: Escreva uma função que receba uma matriz de números e uma
função de retorno de chamada. A função deve filtrar a matriz com base na
função de retorno de chamada e retornar a matriz filtrada.*/

function filtrar(matriz, retorno) {
    return matriz.filter(retorno);
}

console.log(filtrar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(valor) {
    return valor % 2 === 0;
}));