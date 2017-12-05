import types from '../types';
import userListSaga from './user-list-saga';
import {push, LOCATION_CHANGE} from 'react-router-redux';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Routes, DEFAULT_QUERY} from 'constants.js';

const SAGA_FOR_ROUTE = {
    [Routes.LIST]: userListSaga
};

/**
 * Start some logic on route change specific from route
 *
 * @param {string} action.payload.pathname
 */
function* navigationSaga(action) {
    const location = action.payload;
    const saga = SAGA_FOR_ROUTE[location.pathname];
    if (saga) {
        yield call(saga, location);
    }
}

/**
 * Push route to browser history
 *
 * @param {string} route
 * @param {Object} params
 */
function* changeRouteSaga({route, params}) {
    let fullRoute = route;
    const extendedParams = {
        ...DEFAULT_QUERY,
        ...params
    };

    for(const key in extendedParams) {
        fullRoute = fullRoute + `?${key}=${extendedParams[key]}`;
    }
    yield put(push(fullRoute));
}

export default function* routerRootSaga() {
    yield takeLatest(LOCATION_CHANGE, navigationSaga);
    yield takeLatest(types.CHANGE_ROUTE, changeRouteSaga);
}
