/*Class estrutura que atribui valores do objeto */
/*Constructor constrói valores */
class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    /* */
    greet(){
        return `Hi, my name is ${this.name} and I am a ${this.age} year old ${this.gender}.`;   
    }
}

const person1 = new Person('Roberto', 25, 'Male');
const person2 = new Person('Carlos', 22, 'Male');
console.log(person1.greet(),'\n'+person2.greet());