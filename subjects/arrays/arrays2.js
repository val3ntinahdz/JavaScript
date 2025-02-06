let artists = ['Alex Turner', 'Amy Winehouse', 'Billy Joel', 'Daft Punk'];
console.log('Length:', artists.length);

let first = artists[2 - 2];
let last = artists[artists.length - 1]; // Get the last element of the array

console.log({first, last});

artists.forEach((element, index, arr) => {
    console.log({element, index, arr});
});

// .push() appends new elements to an array, and returns the new length of the array.
newElement = artists.push('Michael Jackson');
console.log({newElement, artists});

// .unshift() inserts new elements at the start of the array
firstArtist = artists.unshift('Frank Sinatra');
console.log({firstArtist, artists});

// pop() removes the last inserted element in the array
let removedArtist = artists.pop();
console.log({removedArtist, artists});

// .splice() removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let position = 1;

let removedArtists = artists.splice(position, 2);
console.log(removedArtists, artists);

// .indexOf() returns the position of a specified element
let dpIndex = artists.indexOf('Daft Punk');
console.log({dpIndex});
