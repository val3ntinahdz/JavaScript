const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    throw new Error("Not implemented");
}

const loadPreviousPage = async() => {
    throw new Error("Not implemented");
    
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
    reloadPage

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}
