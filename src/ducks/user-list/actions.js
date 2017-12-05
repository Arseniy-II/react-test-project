import types from './types';

export default {
    /**
     * Request fetch userList
     *
     * @param {Object} query
     * @return {Object}
     */
    fetchUserListRequest(query) {
        return {
            type: types.FETCH_USER_LIST_REQUEST,
            query
        };
    },

    /**
     * Successfully fetch userList
     *
     * @param {Array} list
     * @param {Object} query
     * @return {Object}
     */
    fetchUserListSuccess(list, query) {
        return {
            type: types.FETCH_USER_LIST_SUCCESS,
            list,
            query
        };
    },

    /**
     * Error on fetch userList
     *
     * @return {Object}
     */
    fetchUserListError(error) {
        return {
            type: types.FETCH_USER_LIST_ERROR,
            error
        };
    },

    /**
     * Sort user list depends on query
     *
     * @params {Object} query
     * @return {Object}
     */
    sortUserList(query) {
        return {
            type: types.FETCH_USER_LIST_ERROR,
            query
        };
    },

    /**
     * Add user to favourite
     *
     * @params {string} id
     * @return {Object}
     */
    addToFavourite(id) {
        return {
            type: types.ADD_TO_FAVOURITE,
            id
        };
    }
};
