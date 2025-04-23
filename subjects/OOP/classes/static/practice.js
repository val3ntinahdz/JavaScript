// static methods are called on the class itself, not on the instances of the class. 
// the static method syntax is the following: 
// class ClassWithStatic {
//   static staticField;
//   static staticFieldWithInitializer = value;
//   static staticMethod() {
//     // …
//   }
// }

// there are additional syntax restrictions: 
// - the name of a static prooerty (a field or a method) CANNOT be prototype
// - the name of a class field (static or instance) CANNOT be constructor

// static methods are useful when we want to re-use methods and call properties on our main class. 
// in the case we want to call our static methods or properties in other objects, we should first inherit our main class.
class Rabbit extends Object {
    constructor(name) {
        super()
        this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  // here, super() property needs to be called to inherit the prototype from Object 
  // this is the only way the static method could work, because it comes from the Object class 
  alert(Rabbit.prototype._proto_ === Object.prototype);
alert( Rabbit.__proto__ === Object );
  
  alert( rabbit.hasOwnProperty('name') ); // Error


// math utils exercise 
class MathUtil {
  static sum(a, b) {
    return a + b;
  }

  static minus(a, b) {
   return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    const result = a / b;
    if (isFinite(result)) {
      return result;
    } else {
      return "not a valid number buddy!";
    }
  }

  static isEven(n) {
    if (n % 2 === 0) {
      return "is even";
    } else {
      return "is odd!";
    }
  }
}

console.log(MathUtil.sum(13, 13));
console.log(MathUtil.minus(100, 13));
console.log(MathUtil.multiply(13, 13));
console.log(MathUtil.divide(249, 0));
console.log(MathUtil.isEven(398239392474));