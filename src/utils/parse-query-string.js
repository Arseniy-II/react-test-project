/**
 * split query string and save params in object
 *
 * @param {string} queryString
 * @returns {Object}
 */
export default (queryString) => {
    const params = {};
    let queries,
        temp;

    queries = queryString.split('?');

    // Convert the array of strings into an object
    for (let queryIndex = 1; queryIndex < queries.length; queryIndex++) {
        temp = queries[queryIndex].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};
