/**
 * @param {String|Number} id
 */

export const deleteUser = async(id) => {
    // to create our user, we should make a HTTP requests to our users PATH stored in .env
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${id}`;

    // here, we fetch the response receiving 2 params: (url, object cointaining options to configure the requests)
    const res = await fetch(url, {
        method: "DELETE",
    });

    const deleteResult = await res.json(); // await for fetch to return a promise of the request
    console.log({ deleteResult });

    return true;
}