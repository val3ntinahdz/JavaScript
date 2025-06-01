import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        our heroes: <h2>${hero1.name}</h2> and <h2>${hero2.name}</h2>
        `
    }

    const renderError = (error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3>
        `
    }

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371fd55e2e2a30fe1cc3';

    findHero(id1)
        .then((hero1) => {

            findHero(id2)
                .then(hero2 => {
                    renderTwoHeroes(hero1, hero2);
                });
        })
        .catch(renderError)
   
}


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */

const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`hero with id ${id} not found.`);

    });
}