import types from './types';

export const initialAppState = {
    isFetching: true,
    error: null,
    list: [],
    allIds: [],
    byId: {}
};

const parseArray = (userList) => {
    const byId = {};
    const allIds = [];
    userList.forEach(user => {
        byId[user.id] = user;
        allIds.push(user.id);
    });
    return {byId, allIds};
};

export default function (state = initialAppState, action) {
    switch (action.type) {
        case types.FETCH_USER_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case types.FETCH_USER_LIST_SUCCESS:
            // TODO filter correspond to action.query
            return {
                ...state,
                ...parseArray(action.list),
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
