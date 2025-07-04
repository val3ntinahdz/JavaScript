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
    
    // TODO: A mapper is needed here to convert our fields for the backEnd

    if (user.id) {
        throw "No update implemented";
        return;
    }

    const updateUser = await createUser(userToSave);
    return updateUser;
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