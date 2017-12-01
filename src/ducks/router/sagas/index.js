import {Routes} from 'constants.js';
import rootSaga from './root-saga';
import {put, takeLatest, call} from 'redux-saga/effects';
import types from '../types';
import {push, LOCATION_CHANGE} from 'react-router-redux';

const SAGA_FOR_ROUTE = {
    [Routes.ROOT]: rootSaga
};

/**
 * Start some logic on route change
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
