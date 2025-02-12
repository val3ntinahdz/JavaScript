// objects are like python dictionaries
// objects have key-vale pairs in their structure
// uses lowerCamelCase with property names

const character = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false, 
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
       zip: '10880, 90265',
       location: 'Malibu, California' 
    }
};

console.log({character});
console.log('nombre:', character.name);
console.log('name:', character['name']);
console.log('age:', character.age);
console.log('Coors:', character.coords);
console.log('Lat:', character.coords.lat);
console.log('Suit number:', character.suits.length);
console.log('Last suit:', character.suits[character.suits.length - 1]);

character.codeName = [character.codeName]
character.codeName.push('Tony');
console.log('New codename:', character.codeName[character.codeName.length - 1]);

const x = 'alive';
console.log('alive?', character[x]);

// Remove a property
delete character.age;
console.log(character);

// Create a new key-value pair
character.married = true;

// Convert the object into an array
const entriesPairs = Object.entries(character);
console.log(entriesPairs);

console.log(character);
// character = true;

// Freezes the direct assignations
Object.freeze(character);

character.cash = 10000000000000;
character.married = false;
character.address.location = 'Bali';
console.log(character);

// Extract the Object's properties
const properties = Object.getOwnPropertyNames(character);
console.log("Properties:", properties);

// Get the Object's values
const val = Object.values(character);
console.log("Values:", val);

// Check the documenation for reference => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
