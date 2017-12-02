import types from './types';
import {LOCALES} from 'constants.js';

export const initialAppState = {
    isLoading: true,
    error: null,
    locale: LOCALES.DEFAULT,
    i18n: null
};

export default function (state = initialAppState, action) {
    switch (action.type) {
        case types.FETCH_I18N_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.FETCH_I18N_SUCCESS:
            return {
                ...state,
                i18n: action.i18n,
                locale: action.locale,
                isLoading: false
            };
        case types.FETCH_I18N_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return state;
    }
}
