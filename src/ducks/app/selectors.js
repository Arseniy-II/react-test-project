export default {
    /**
     * Select Locale
     *
     * @param {Object} state
     * @return {Object}
     */
    selectLocale({app: state}) {
        return {
            isLoading: state.isLoading,
            i18n: state.i18n,
            locale: state.locale
        };
    }
};
