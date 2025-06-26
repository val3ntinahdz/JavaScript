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

    // make the data response return the new instance of the User Object
    const users = data.map(localhostUserToModel);
    return users; // [User, User, User, x7]
    // console.log(data);
    // console.log(data.data);

    // const user = new User(data);
    // const dataUser = localhostUserToModel(user);
}