const e = require('prompt-sync')();
function reverseString() {
    const name = String(e('Digite uma palavra: '))
    const splitName = name.split('')
    const reverse = splitName.reverse()
    const join = reverse.join('')
    return join
}

console.log(`A palavra invertida ficou: ${reverseString()}`);
