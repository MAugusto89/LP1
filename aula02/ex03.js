class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    greet(){
        return  `A área do quadrado é:`, this.width  *this.height;
    }
}
const getArea = new Rectangle(2 , 2);
console.log(`A área do quadrado é ${getArea.greet()}`);