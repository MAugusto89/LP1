const e = require('prompt-sync')();
const n1 = Number(e('Digite um número:'));
function isEven() {

    if (n1 % 2 == 0 ) {
        return true;

    }else{
        return false;
    }
}
console.log(`O número digitado é par ? ${isEven()}`);