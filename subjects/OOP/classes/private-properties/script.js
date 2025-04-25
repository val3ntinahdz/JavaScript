// private properties are useful for encapsulating data and preventing external access to sensitive information. 
// they are defined using the # symbol before the property name.

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