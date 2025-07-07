import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {String|Number} page 
 * @returns { Promise<User[]>}
 */
export const getUserById = async(id) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${id}`; 
    // console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    
    // By calling the function "localhostUserToModel" we ensure that the data
    // is returned with the attributes we set up in our mapper (firstName and lastName)
    const user = localhostUserToModel(data);
    console.log({user});
    
    return user;
}