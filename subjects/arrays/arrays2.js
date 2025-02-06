let artists = ['Alex Turner', 'Amy Winehouse', 'Billy Joel', 'Daft Punk'];
console.log('Length:', artists.length);

let first = artists[2 - 2];
let last = artists[artists.length - 1]; // Get the last element of the array

console.log({first, last});

artists.forEach((element, index, arr) => {
    console.log({element, index, arr});
});


newElement = artists.push('Michael Jackson');
console.log({newElement, artists});


firstArtist = artists.unshift('Frank Sinatra');
console.log({firstArtist, artists});


let removedArtist = artists.pop();
console.log({removedArtist, artists});


let position = 1;

let removedArtists = artists.splice(position, 2);
console.log(removedArtists, artists);


let dpIndex = artists.indexOf('Daft Punk');
console.log({dpIndex});
