import axios from 'axios';

const request = axios.create({
    baseURL: 'some base url' // TODO
});

request.interceptors.response.use(successResponseErrorHandler, failResponseErrorHandler);

/**
 * Check error field inside successful response and reject them
 *
 * @param {Object} response
 * @returns {Object}
 */
function successResponseErrorHandler(response) {
    if (response.data.error) {
        return Promise.reject(response.data.error);
    }

    return response;
}

/**
 * Check error field inside unsuccessful response, map and reject them
 *
 * @param {Object} responseWithError
 * @returns {Object}
 */
function failResponseErrorHandler(responseWithError) {
    if (responseWithError.response) {
        return Promise.reject(responseWithError.response.data);
    }

    return Promise.reject(responseWithError);
}

export default request;
