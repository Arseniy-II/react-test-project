import types from './types';

export default {
    /**
     * Change route action
     *
     * @param {string} route
     * @returns {Object}
     */
    changeRoute(route) {
        return {
            type: types.CHANGE_ROUTE,
            route
        };
    }
};
