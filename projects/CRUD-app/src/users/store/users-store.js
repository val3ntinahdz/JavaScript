import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;

    // i will only change the page if there are users in the response above 
    state.currentPage += 1;
    state.users = users;

    console.log(state);
    
}

const loadPreviousPage = async() => {
    const users = await loadUsersByPage(state.currentPage - 1);
    if (users.length === 1) return;

    // i will only change the page if there are users in the response above 
    state.currentPage -= 1;
    state.users = users;

    console.log(state);
    
}

const onUserChanged = () => {
    throw new Error("Not implemented");
}

const reloadPage = async() => {
    throw new Error("Not implemented");
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}
