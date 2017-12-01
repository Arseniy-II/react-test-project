export default {
    /**
     * Select initial loading module
     *
     * @param {Immutable.Map} state
     * @return {Object}
     */
    selectInit(state) {
        return {
            isLoading: state.isLoading
        };
    }
};
