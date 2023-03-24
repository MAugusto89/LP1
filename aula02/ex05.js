class Circle{
    constructor(radius){
        this.radius = radius;
    }
    /* */
    greet(){
        return Math.PI*Math.pow(this.radius, 3);   
    }
}

const getArea = new Circle(7);

console.log(`A área do circulo ficou é de ${getArea.greet().toFixed(2)}`);