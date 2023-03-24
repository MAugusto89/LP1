const e = require('prompt-sync')();
class Animal{
    constructor(name, song){
        this.name = name;
        this.song = song;
    }
    greet(){
        return `${this.name} = ${this.song}`;
    }
}
console.log("Escolha o nome de alguns dos animais (Lion, Cat, Dog)");
var user = String(e("R= "))
if (user == 'Lion') {
    var som = 'Rugido';
}else if (user == 'Cat') {
    var som = 'Miau Miau';
}else if (user == 'Dog') {
    var som = 'Auauauau';
}
const speak = new Animal(user, som);
console.log(speak.greet());
