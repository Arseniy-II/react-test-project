export default {
    /**
     * Select location object
     *
     * @param {Object} state
     * @return {Object}
     */
    selectLocation(state) {
        return {
            location: state.routing.locationBeforeTransitions
        };
    },

    /**
     * Select query from url
     *
     * @param {Object} state
     * @return {Object}
     */
    selectQuery(state) {
        return {
            query: state.routing.locationBeforeTransitions.query
        };
    },

    /**
     * Select search from url
     *
     * @param {Object} state
     * @return {Object}
     */
    selectSearch(state) {
        return {
            search: state.routing.locationBeforeTransitions.search
        };
    }
};
