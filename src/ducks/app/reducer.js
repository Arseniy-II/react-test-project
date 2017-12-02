import types from './types';
import {LOCALES} from 'constants.js';

export const initialAppState = {
    isFetching: true,
    error: null,
    locale: LOCALES.DEFAULT,
    i18n: null
};

export default function (state = initialAppState, action) {
    switch (action.type) {
        case types.FETCH_I18N_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case types.FETCH_I18N_SUCCESS:
            return {
                ...state,
                i18n: action.i18n,
                locale: action.locale,
                isFetching: false
            };
        case types.FETCH_I18N_ERROR:
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        default:
            return state;
    }
}
