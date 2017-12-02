import userListSaga from './user-list-saga';
import types from '../types';
import {push, LOCATION_CHANGE} from 'react-router-redux';
import {put, takeLatest, call} from 'redux-saga/effects';
import {Routes} from 'constants.js';

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
 * @param {string} action.route
 */
function* changeRouteSaga(action) {
    yield put(push(action.route));
}

export default function* routerRootSaga() {
    yield takeLatest(types.CHANGE_ROUTE, changeRouteSaga);
    yield takeLatest(LOCATION_CHANGE, navigationSaga);
}
