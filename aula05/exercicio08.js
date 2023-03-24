/*Exercício 8: Escreva uma função que receba um array de objetos e um
callback que filtra os objetos com base em uma determinada propriedade. A
função deve retornar um novo array contendo apenas os objetos que possuem a
propriedade desejada.*/

function filtrarPorPropriedade(array, propriedade, callback) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][propriedade] === callback) {
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}
callback = [
    { nome: 'Ana', idade: 30 },
    { nome: 'Bia', idade: 29 },
    { nome: 'Carlos', idade: 28 },
]

console.log(filtrarPorPropriedade(['Ana', 30]));