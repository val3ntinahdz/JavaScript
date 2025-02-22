/**
 * 2C = Two of clubs
 * 2D = Two of diaminds
 * 2H = Two of hearts
 * 2S = Two of spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const extraCards = ['A', 'J', 'Q', 'K'];


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