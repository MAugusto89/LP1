/*Exercício 2: Write a function that takes a string and a callback function. The
function should call the callback function with each character of the string.*/

function forEachChar(str, callback) {
    for (let i = 0; i < str.length; i++) {
        callback(str[i]);
    }
}
forEachChar("hello", (char) => console.log(char));