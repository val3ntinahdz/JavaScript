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
    console.log("Data:", data.length - 1);
    console.log("page:", page);

    if (page > data.length - 1) {

        // TODO 1: Replace all the buttons and span content with a phrase: "No more pages to show";
        // TODO 2: Add a "reload" button to initialize table from the first users page!
        alert("No more pages to show");
        return [];
    }
    
    // By calling the function "localhostUserToModel" we ensure that the data
    // is returned with the attributes we set up in our mapper (firstName and lastName)
    const users = data.map(localhostUserToModel);
    console.log(users);
    
    // make the data response return the new instance of the User Object
    return users;
}