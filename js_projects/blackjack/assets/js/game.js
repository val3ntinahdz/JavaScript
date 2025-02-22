/**
 * 2C = Two of clubs
 * 2D = Two of diaminds
 * 2H = Two of hearts
 * 2S = Two of spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const extraCards = ['A', 'J', 'Q', 'K'];

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

    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}


createDeck();