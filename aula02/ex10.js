const e = require('prompt-sync')();
var n = Number(e('Digite um número para ver seu FATORIAL : '))
function fatorial(){
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
console.log(`O fatorial do número ${n} é ${fatorial()}`);