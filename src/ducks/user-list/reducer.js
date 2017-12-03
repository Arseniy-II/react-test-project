import types from './types';
import {filterUsers} from 'utils';

export const initialAppState = {
    isFetching: true,
    error: null,
    list: [],
    allIds: [],
    byId: {}
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
                ...filterUsers(action.list, action.query),
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
