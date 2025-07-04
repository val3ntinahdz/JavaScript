import { User } from "../models/user";
/**
 * 
 * @param {User} user 
 */

export const userModelToLocalhost = (user) => {
    // send the data as the backend expects 
    // destructure user´s properties 

    const {
        avatar,
        balance,
        firstName,
        gender,
        id, 
        lastName, 
        isActive,
    } = user;


    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id, 
        last_name: lastName, 
        isActive,
    }
}