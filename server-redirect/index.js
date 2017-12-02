let url = require('url');

/**
 * Redirect to index.html if request isn't api
 */
module.exports = (options = {}) => (req, res, next) => {
    // don't redirect if requests api
    if (req.url.indexOf('/api') === 0) {
        return next();
    }
    //redirect to index.html
    req.url = options.index || '/index.html';
    next();
};
