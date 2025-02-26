/**
 * 2C = Two of clubs
 * 2D = Two of diaminds
 * 2H = Two of hearts
 * 2S = Two of spades
 */

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const extraCards = ['A', 'J', 'Q', 'K'];

let playerPoints    = 0,
    computerPoints  = 0;

// HTML references
btnAsk = document.querySelector('#btnAsk');
btnStop = document.querySelector('#btnStop');
btnNew = document.querySelector('#btnNew');

const playerCards   = document.querySelector('#player-cards');
const computerCards = document.querySelector('#computer-cards');
const pointsHTML    = document.querySelectorAll('small');

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

// COMPUTER'S TURN
// The computer will ask for cards 
const computerTurn = (minimumPoints) => {
    do {

        const card = askForCard(); // generated card
        console.log(card);

        computerPoints = computerPoints + cardValue(card); // the card i generated
        console.log('computer points:', computerPoints);
        pointsHTML[1].innerText = computerPoints; // access the first <small> element in the HTML with its index (0)

        // Create new card every time the player points are calculated to build a deck
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cards/${card}.png`;
        imgCard.classList.add('card');
        computerCards.append(imgCard);

        if (minimumPoints > 21) {
            break;
        }
    

    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));

    setTimeout(() => {
        if (computerPoints > 21) {
            alert("Congrats player! You've earned an esquite");
        } else if (minimumPoints > 21) {
            alert("Pffff, the computer did it again! Good luck next time.");
        } else if (computerPoints === minimumPoints) {
            alert("What a stupid game! No one won.");
        } else {
            alert("Computer won!")
        }
    }, 10);

}

// When we work with an element multiple times, it is recommended to create a variable for it

// Events
// -> A function that is being passed as an argument is known as "callback"
btnAsk.addEventListener('click', () => {
    const card = askForCard(); // generated card
    console.log(card);

    playerPoints = playerPoints + cardValue(card); // the card i generated
    console.log('player points:', playerPoints);
    pointsHTML[0].innerText = playerPoints; // access the first <small> element in the HTML with its index (0)

    // Create new card every time the player points are calculated to build a deck
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('card');
    playerCards.append(imgCard);

    // check if player won or lost 
    if (playerPoints > 21) {
        console.warn('Sorry loser!');
        btnAsk.disabled = true; // deactivate the action buttons once the player has reached more than 21 points
        btnStop.disabled = true; 
        
        computerTurn(playerPoints);
        
    } else if (playerPoints === 21) {
        console.warn('21! you nailed it');
        computerTurn(playerPoints);
    }
});

btnStop.addEventListener('click', () => {
    btnStop.disabled = true;
    btnAsk.disabled = true;

    computerTurn(playerPoints); // shoot the computer turn now and compare points!
})

btnNew.addEventListener('click', () => {
    window.location.reload();
})