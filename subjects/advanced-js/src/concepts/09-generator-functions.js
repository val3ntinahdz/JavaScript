import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {
    
//    const myGenerator = myFirstGeneratorFunction();

    const generateId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = generateId.next();
        button.innerText = `click ${value}`;
    }
    
    button.addEventListener('click', renderButton)
}

function* idGenerator() {
    let currentId = 0;
    while(true) {
        yield ++currentId;
    }
}

// function* myFirstGeneratorFunction() {
//     yield 'my first value'; 
//     yield 'my second value';
//     yield 'my third value'; 
//     yield 'my forth value'; 
//     yield 'my fifth value'; 

//     return 'there are no more values';

//     yield "there nothing more you can do!";
// }