import { heroes } from "../data/heroes";

export const asyncComponent = (element) => {
    const id1 = "5d86371fd55e2e2a30fe1ccb2";

    findHero(id1)
        .then( name => element.innerHTML = name)
}

const findHero = async( id ) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero.name;
}