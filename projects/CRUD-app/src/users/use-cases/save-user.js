import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userLike 
 */

export const saveUser = async(userLike) => {
    const user = new User(userLike);

    if (!user.firstName || !user.lastName) 
        throw "First and Last name are required"

    const userToSave = userModelToLocalhost(user);
    let userUpdated;
    
    // TODO: A mapper is needed here to convert our fields for the backEnd (DONE)

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel(userUpdated);
}


/**
 * @param {Like<User>} user
 */

const createUser = async(user) => {
    // to create our user, we should make a HTTP requests to our users PATH stored in .env
    const url = `${ import.meta.env.VITE_BASE_URL }/users`;

    // here, we fetch the response receiving 2 params: (url, object cointaining options to configure the requests)
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    });

    const newUser = await res.json(); // await for fetch to return a promise of the request
    console.log({ newUser });

    return newUser;
}


/**
 * @param {Like<User>} user
 */

const updateUser = async(user) => {
    // to create our user, we should make a HTTP requests to our users PATH stored in .env
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${user.id}`;

    // here, we fetch the response receiving 2 params: (url, object cointaining options to configure the requests)
    const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
            "Content-type": "application/json"
        }
    });

    const updatedUser = await res.json(); // await for fetch to return a promise of the request
    console.log({ updatedUser });

    return updatedUser;
}