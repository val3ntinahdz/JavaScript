// objects are like python dictionaries
// objects have key-vale pairs in their structure
// uses lowerCamelCase with property names
let character = {
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

const x = 'alive';
console.log('alive?', character[x]);