import types from './types';

export default {
    /**
     * Request fetch userList
     *
     * @return {Object}
     */
    fetchUserListRequest() {
        return {
            type: types.FETCH_USER_LIST_REQUEST
        };
    },

    /**
     * Successfully fetch userList
     *
     * @return {Object}
     */
    fetchUserListSuccess(list) {
        return {
            type: types.FETCH_USER_LIST_SUCCESS,
            list
        };
    },

    /**
     * Error on fetch userList
     *
     * @return {Object}
     */
    fetchUserListError(userList) {
        return {
            type: types.FETCH_USER_LIST_ERROR,
            userList
        };
    }
};
