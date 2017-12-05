import actions from './actions';
import service from './service';
import types from './types';
import {LOCALES} from 'constants.js';
import {takeLatest, all, fork, put, call} from 'redux-saga/effects';

function* initSaga() {
    yield put(actions.fetchI18nRequest(LOCALES.DEFAULT));
}

/**
 * Fetch i18n for corresponding locale saga
 */
function* fetchLocaleSaga({locale}) {
    try {
        const {i18n} = yield call(service.fetchI18n, locale);
        yield put(actions.fetchI18nSuccess({i18n, locale}));
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
