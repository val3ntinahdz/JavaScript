// Private and protected properties in JavaScript classes
// private properties are useful for encapsulating data and preventing external access to sensitive information. 
// they are defined using the # symbol before the property name.

// protected properties are usually prefixed with an underscore _

class Figure {
    _color = "";

    setColor(value) {
        return this._color = value;
    }
}

const newFigure = new Figure();
newFigure.setColor("green")
console.log(newFigure);

class Rectangle extends Figure {
    #area = 0;

    constructor(width = 0, height = 0) {
        super();
        this.width = width;
        this.height = height;
        this.calculateArea();
    }

    calculateArea() {
        return this.#area = this.width * this.height;
    }

    // #area property is only accessible within the class it was defined,
    // otherwise, we might opt to create a getter to obtain its value and call it later on an instance 
    getArea() {
        return this.#area;
    }
}

const rectangle = new Rectangle(34, 10);
console.log(rectangle.calculateArea()); // 340
console.log(rectangle.setColor("blue")); // we access our parent class method "setColor"
console.log(rectangle.getArea()); // for demonstration purposes only