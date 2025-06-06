import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb1';

    findHero(id1)
        .then( name => element.innerHTML = name)
}

const findHero = async( id ) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero.name;
}