import types from './types';

export default {
    /**
     * Request fetch i18n
     *
     * @param {string} locale
     * @return {Object}
     */
    fetchI18nRequest(locale) {
        return {
            type: types.FETCH_I18N_REQUEST,
            locale
        };
    },

    /**
     * Successfully fetch i18n
     *
     * @param {Object} i18n
     * @param {string} locale
     * @return {Object}
     */
    fetchI18nSuccess({i18n, locale}) {
        return {
            type: types.FETCH_I18N_SUCCESS,
            i18n,
            locale
        };
    },

    /**
     * Error on fetch i18n
     *
     *  @param {Error} error
     * @return {Object}
     */
    fetchI18nError(error) {
        return {
            type: types.FETCH_I18N_ERROR,
            error
        };
    }
};
