/**
 * Handle errors and log them into console
 *
 * @param {Object} errorResponse
 * @returns {Promise.<Object>}
 */
export function mapErrorResponse(errorResponse) {
    /* eslint-disable no-console */
    if (errorResponse.message) {
        console.error(errorResponse.message);
        return Promise.reject(errorResponse);
    }
    /* eslint-enable no-console */
}
