import types from './types';

export const initialAppState = {
    isFetching: true,
    error: null,
    list: []
};

export default function (state = initialAppState, action) {
    switch (action.type) {
        case types.FETCH_USER_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case types.FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                list: {
                    ...action.list
                },
                isFetching: false
            };
        case types.FETCH_USER_LIST_ERROR:
            return {
                ...state,
                error: action.error,
                isFetching: false
            };
        default:
            return state;
    }
}
