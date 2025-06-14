import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorAsyncComponent = async( element ) => {
    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {

        const { value, done } = await heroGenerator.next();
        isFinished = done;

        if(isFinished) break;

        console.log({value, done});

        element.innerHTML = value;

    } while(!isFinished)
    
}

async function* getHeroGenerator() {
    for( const hero of heroes ) {
        await sleep();
        yield hero.name; // the function will stop here
    }

    return "there are no more heroes!";
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    });
}