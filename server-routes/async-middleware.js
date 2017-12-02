const fs = require('fs');


module.exports = {
    asyncResponse: (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch(next);
    },
    asyncFileRead: (path, opts = 'utf8') =>
        new Promise((res, rej) => {
            fs.readFile(path, opts, (err, data) => {
                if (err) rej(err);
                else res(data)
            })
        })
};
