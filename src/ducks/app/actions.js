import types from './types';

export default {
    /**
     * Initialize the application
     *
     * @return {Object}
     */
    initApplication() {
        return {
            type: types.INIT_APPLICATION_START
        };
    },

    /**
     * Successful initialization of the application
     *
     * @return {Object}
     */
    successInit() {
        return {
            type: types.INIT_APPLICATION_SUCCESS
        };
    },

    /**
     * Unsuccessful initialization of the application
     *
     * @param {Object} error
     * @return {Object}
     */
    unsuccessfulInit(error) {
        return {
            type: types.INIT_APPLICATION_ERROR,
            error
        };
    }
};
