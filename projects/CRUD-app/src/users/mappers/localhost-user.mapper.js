import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User<Object>}
 */
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