/**
 * 2C = Two of clubs
 * 2D = Two of diaminds
 * 2H = Two of hearts
 * 2S = Two of spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const extraCards = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;

// HTML references
btnAsk = document.querySelector('#btnAsk');

const pointsHtml = document.querySelectorAll('small');

// This function creates a new deck
const createDeck = () => {
    for(let i = 2; i <= 10; i++) {
        for(let type of types) {
            deck.push(i + type);
        }
    }

    for(let type of types) {
        for(let card of extraCards) {
            deck.push(card + type);
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

createDeck();

// This function allows the user to ask for a card
const askForCard = () => {
    if (deck.length === 0) {
        throw 'Deck is empty'; // handle edge cases
    }

    const i = Math.floor(Math.random() * deck.length);
    const randomCard = deck[i];
    deck.splice(i, 1); // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript

    console.log('Random card:', randomCard);
    console.log(deck);
    return randomCard; // return the drawn card
}

askForCard();

const cardValue = (card) => {
    // Substring method reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
    const val = card.substring(0, card.length - 1); // extract the card value

    return (isNaN(val)) ?
           (val === 'A') ? 11 : 10
           : val * 1;
}

const val = cardValue(askForCard());
console.log(val);

// document.body.onload = createButton; 
// document.body.onload = createInput;

// function createButton() {
//     const divButtons = document.getElementById('divButtons');
//     const newButton = document.createElement('button');

//     divButtons.append(newButton);
//     newButton.innerText = 'destroy the world';
//     newButton.classList.add('btn-success');
// }

// function createInput() {
//     const doc = document.querySelector('body');

//     const input = document.createElement('input');
//     input.classList.add('form-control');
//     doc.appendChild(input);

//     input.placeholder = 'hello world!';
// }


// When we work with an element multiple times, it is recommended to create a variable for it

// Events
// -> A function that is being passed as an argument is known as "callback"
btnAsk.addEventListener('click', () => {
    const card = askForCard();
    console.log(card);

    playerPoints = playerPoints + cardValue(card); // the card i generated
    console.log('player points:', playerPoints);
    pointsHtml[0].innerText = playerPoints;

    // Create new card every time the player points are calculated to build a deck
})