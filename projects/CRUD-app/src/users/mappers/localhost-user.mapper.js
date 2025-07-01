import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User<Object>}
 */


// We create a mapper to map this set of objects using a mapping method.
export const localhostUserToModel = ( localhostUser ) => {
    const {
        avatar,
        balance,
        first_name,
        gender,
        id, 
        last_name, 
        isActive,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id, 
        lastName: last_name, 
        isActive,
    })
}