/**
 * 2C = Two of clubs
 * 2D = Two of diaminds
 * 2H = Two of hearts
 * 2S = Two of spades
 */



(() => {
    'use strict' // -> enables 'strict' mode in the function only
    
    let deck         = [];
    const types      = ['C', 'D', 'H', 'S'],
          extraCards = ['A', 'J', 'Q', 'K']; // unnecessary 'const' initialization
    

    let playerPoints = []; // each position of the array belongs to one player (human & computer)
    
    // HTML references
    const btnAsk = document.querySelector('#btnAsk'),
          btnStop = document.querySelector('#btnStop'),
          btnNew = document.querySelector('#btnNew');
    
    const divPlayerCards = document.querySelectorAll('.divCards'),
          pointsHTML    = document.querySelectorAll('small');


    const initializeGame = (playersNum = 2) => {
        console.log("Initializing game...");
        deck = createDeck();


        // playerPoints = [];
        for(let i = 0; i < playersNum; i++) {
            playerPoints.push(0);
        }

        console.log({ playerPoints });
    }

    
    // This function creates a new deck
    const createDeck = () => {
        deck = [];
        
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
        
        console.log(deck)
        return _.shuffle(deck);
    }

    initializeGame();
    
    // This function allows the user to ask for a card
    const askForCard = () => {
        if (deck.length === 0) {
            throw 'Deck is empty'; // handle edge cases
        }

        
        return deck.pop(); // remove the last card from the shuffled deck
    }
    
    
    const cardValue = (card) => {
        // Substring method reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
        const val = card.substring(0, card.length - 1); // extract the card value
        return (isNaN(val)) ? (val === 'A') ? 11 : 10 : val * 1;
    }
    
    const val = cardValue(askForCard());
    console.log('card value:', val);

    // turn: 0 = first player, turn: 1 = computer
    const sumPoints = (card, turn) => {
        playerPoints[turn] =  playerPoints[turn] + cardValue(card);
        pointsHTML[turn].innerText = playerPoints[turn];
        return playerPoints[turn];
    }
    
    // Create new card every time the player points are calculated to build a deck
    const createCard = (card, turn) => {
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cards/${card}.png`;
        imgCard.classList.add('card');
        divPlayerCards[turn].append(imgCard); // make the card img attachment dynamic depending on the turn (human or computer)
    }
    
    
    // COMPUTER'S TURN
    // The computer will ask for cards 
    const computerTurn = (minimumPoints) => {
        do {
    
            const card = askForCard(); // generated card
            console.log(card);

            const computerIdx = playerPoints.length - 1;
            sumPoints(card, computerIdx);
            createCard(card, computerIdx); // 1

    
            if (minimumPoints > 21) {
                break;
            }
        
    
        } while ((playerPoints[computerIdx] < minimumPoints) && (minimumPoints <= 21));
    
        setTimeout(() => {
            const computerPoints = playerPoints[computerIdx];

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
    
        sumPoints(card, 0);
    
        // Create new card every time the player points are calculated to build a deck
        createCard(card, 0);
        
    
        // check if player won or lost 
        if (playerPoints[0] > 21) {
            console.warn('Sorry loser!');
            btnAsk.disabled = true; // deactivate the action buttons once the player has reached more than 21 points
            btnStop.disabled = true; 
            
            computerTurn(playerPoints[1]);
            
        } else if (playerPoints[0] === 21) {
            console.warn('21! you nailed it');
            computerTurn(playerPoints[1]);
        }
    });
    

    btnStop.addEventListener('click', () => {
        btnStop.disabled = true;
        btnAsk.disabled = true;
    
        computerTurn(playerPoints[1]); // shoot the computer turn now and compare points!
    })
    
    btnNew.addEventListener('click', () => {
        console.clear();
        initializeGame();

        pointsHTML[0].innerText = 0;
        pointsHTML[1].innerText = 0;

        btnAsk.disabled = false;
        btnStop.disabled = false;
    })

})();