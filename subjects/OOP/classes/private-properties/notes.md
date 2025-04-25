# private vs protected properties in javascript

this is a simple demonstration of how to use private and protected properties in javascript classes. the example shows how to encapsulate data, keep some properties hidden, and use inheritance properly.

## what's inside

- example of a parent class with a _protected_ property (`_color`)
- example of a child class with a truly _private_ property (`#area`)
- methods to safely interact with these properties
- helpful comments throughout the code

## key concepts

- `#privateProperty`: only accessible inside the class itself
- `_protectedProperty`: accessible inside the class and its subclasses (by convention)
- inheritance using `extends` and `super()`
- data encapsulation and controlled access via getters and setters

## private vs protected — comparison table

| feature               | private (`#property`)       | protected (`_property`)         |
|------------------------|-----------------------------|----------------------------------|
| syntax                 | `#propertyName`              | `_propertyName`                 |
| access scope           | only inside the same class   | class and subclasses            |
| access from outside    | ❌ not allowed               | ⚠️ allowed (but discouraged)    |
| enforced by js engine  | ✅ yes                      | ❌ no (convention only)         |
| access in subclass     | ❌ not accessible            | ✅ accessible                   |
| ideal use case         | sensitive internal data      | internal values meant to be extended |
| introduced in          | es2022                       | long-standing naming convention |