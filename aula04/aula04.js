/* se tiver só uma linha não necessita de chave 
Arrow Function
Exercicio 1: Uma função que retorna o dobro de um número:*/
const double = num => num * 2;
console.log(double(2));

const doubleOther = function(num){
    return num * 2;
}
console.log(doubleOther(2));

/*Exercício 2: Uma função que verifica se o número é par:*/
const isEven = num => num % 2 === 0;
console.log(isEven(2));

const isEven2 = function(num){
    return num % 2 === 0;
}
console.log(isEven(2));

/*Exercício 3: uma função que retorna a soma de dois números:*/
const add = (num1, num2) => num1 +num2;
console.log(add(2,2));

/*Exercício 4:  */
const squareRoot = num => Math.sqrt(num);
console.log(squareRoot(2).toFixed(5));

/*Exercício 5: */
const sumArray = arr => arr.reduce((total, num) => total + num, 0);
console.log(sumArray([1,2,3,4,5]));

const sumArray2 = function(arr){
    let soma = 0;
    for(posi in arr){
        soma += arr[posi];
    }
    return soma;
}
console.log(sumArray2([1, 2, 3, 4, 5]));

/*Exercício 6:  uma função que verifica se um array contém um valor específico:*/
const contains = (arr, val) => arr.includes(val);
console.log(contains([1, 2, 3, 4, 5,], 3));

const contains2 = function(arr, val){
    for(posi in arr){
        if(arr[posi] == val){
            return true;
        }
    }
    return false;
}
console.log(contains2([1,2,3,4,5],3));

/*Exercicio 7:  */
const uppercase = str => str.toUpperCase();

console.log(uppercase('teste'));

console.log(uppercase("teste").charAt(0));
console.log(uppercase("teste").substring(1));

console.log("Eu adoro programar em JavaScript na sexta-feira.".substring(0,10)+"...");
console.log("Marcelo".toUpperCase()[0]+"Marcelo".substring(1));
arrWord="Eu adoro programar em JavaScript na sexta-feira.".split(" ");
for(let i = 0; i<arrWord.length; i++){
    arrWord[i] = arrWord[i].toUpperCase()[0]+arrWord[i].substring(1);
}
console.log(arrWord);
console.log(arrWord.join(" "));

/*Exercício 8: Subtração*/
const subtract = (num1, num2) => num1 - num2;
console.log(subtract(2,2));

const subtract2 = function(num1, num2){
    return num1 - num2;
}
console.log(subtract2(2,2));

/*Exercício 9*/
const createPerson = (name, age) => ({name, age});
person = createPerson('João', 20);
console.log(person);

person.name = 'Maria';
person.age = 25;
console.log(person);

class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const student = new Student('João', 20);
console.log(student);

var employee = function(name, age){
    this.name = name;
    this.age = age;
}
const employee2 = new employee('Ana', 30);
console.log(employee2);


/*Exercício 10*/
const max = arr => Math.max(...arr);
console.log(max([1,2,3,4,5]));

const max2 = function(arr){
    let maior = 0;
    for(posi in arr){
        if(arr[posi]>maior){
            maior = arr[posi];
        }
    }
    return maior;
}
console.log(max2([1,2,3,4,5]));