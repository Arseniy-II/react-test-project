import types from './types';

export const initialAppState = {
    isLoading: true,
    error: null,
    list: []
};

export default function (state = initialAppState, action) {
    switch (action.type) {
        case types.FETCH_USER_LIST_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case types.FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...action.list
                },
                isLoading: false
            };
        case types.FETCH_USER_LIST_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return state;
    }
}
