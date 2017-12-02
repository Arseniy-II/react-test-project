import types from './types';
import actions from './actions';
import {takeLatest, all, fork, put, call} from 'redux-saga/effects';
import {LOCALES} from 'constants.js';
import service from './service';

function* initSaga() {
    yield put(actions.fetchI18nRequest(LOCALES.DEFAULT));
}

/**
 * Fetch locale saga
 */
function* fetchLocaleSaga(action) {
    try {
        const {i18n} = yield call(service.fetchI18n, action.locale);
        yield put(actions.fetchI18nSuccess(i18n));
    } catch (error) {
        yield put(actions.fetchI18nError(error));
    }
}

export default function* rootAppSaga() {
    yield all([
        fork(initSaga),
        takeLatest(types.FETCH_I18N_REQUEST, fetchLocaleSaga)
    ]);
}
