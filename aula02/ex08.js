const e = require('prompt-sync')();
var n = [], recebe = [], maior = 0;
function findMax() {
    do {
        n = Number(e("Digite um número para armazenar no Array: (0 para encerra o programa): "));
        recebe.push(n);
    } while (n != 0);
    
    maior = Math.max(...recebe);
    return maior
}
console.log(`O valor máximo do Array é ${findMax()}`);