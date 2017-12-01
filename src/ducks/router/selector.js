export default {
    /**
     * Select location object
     *
     * @param {Immutable.Map} state
     * @return {Object}
     */
    selectLocation(state) {
        return {
            location: state.routing.locationBeforeTransitions
        };
    }
};
