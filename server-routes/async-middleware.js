const fs = require('fs');


module.exports = {
    /**
     * Return wrapper to handle response callback in async/await style
     *
     * @param {Function} fn
     * @return {Function}
     */
    asyncResponse: (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    },

    /**
     * Return wrapper to handle file read in async/await style
     *
     * @param {string} path
     * @param {string} encoding
     * @return {Promise}
     */
    asyncFileRead: (path, encoding = 'utf8') =>
        new Promise((res, rej) => {
            fs.readFile(path, encoding, (err, data) => {
                if (err) rej(err);
                else res(data)
            })
        })
};
