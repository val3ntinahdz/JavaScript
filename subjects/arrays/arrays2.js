let artists = ['Alex Turner', 'Amy Winehouse', 'Billy Joel', 'Daft Punk'];
console.log('Length:', artists.length);

let first = artists[2 - 2];
let last = artists[artists.length - 1]; // Get the last element of the array

console.log({first, last});

artists.forEach((element, index, arr) => {
    console.log({element, index, arr});
});