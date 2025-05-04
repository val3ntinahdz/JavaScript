import _ from 'underscore';

export const myName = "Valentina";

// the "export" keyword labels variables or functions to make them available outside the current module.
const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = []; // initialize deck

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

export default crearDeck;