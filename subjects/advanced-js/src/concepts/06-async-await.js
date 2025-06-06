import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async(element) => {
    const id1 = "5d86371f25a058e5b1c8a65e";
    const id2  = "5d86371f1efebc31def272e2";

    try {
        // wait for findHero (it's a promise) to resolve, then extract the 'name' property from the result and store it in 'name1'
        const { name: name1 } = await findHero(id1);
        const { name: name2 } = await findHero(id2);
    
        element.innerHTML = `${ name1 } & ${ name2 }`;
        
    } catch (error) {
        element.innerHTML = error;
    }

}


const findHero = async(id) => { 
    const hero = heroes.find( hero => hero.id === id);

    if(!hero)
        throw `Hero with id ${id} not found!`;

    return hero;
}