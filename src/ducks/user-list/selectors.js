export default {
    /**
     * Select Locale
     *
     * @param {Object} state
     * @return {Object}
     */
    selectLocale({userList: state}) {
        return {
            userList: state.list
        };
    }
};
