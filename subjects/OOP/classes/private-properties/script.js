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

const newFigure = new Figure().setColor("green");
console.log(newFigure);

class Rectangle {
    #area = 0;

    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
        this.calculateArea();
    }

    calculateArea() {
        return this.#area = this.width * this.height;
    }
}

const rectangle = new Rectangle(34, 10);
console.log(rectangle.calculateArea()); // 340