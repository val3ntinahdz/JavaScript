import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page 
 * @returns { Promise<User[]>}
 */
export const loadUsersByPage = async( page = 1 ) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${page}`; 
    // console.log(url);
    const res = await fetch(url);
    const { data } = await res.json();
    
    // By calling the function "localhostUserToModel" we ensure that the data
    // is returned with the attributes we set up in our mapper (firstName and lastName)
    const users = data.map(localhostUserToModel);
    console.log(users);
    
    // make the data response return the new instance of the User Object
    return users;
}