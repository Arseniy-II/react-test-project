import types from './types';
// import actions from './actions';
import {
    // put,
    takeLatest,
    all
    // call
} from 'redux-saga/effects';
// import service from './service';

/**
 * Fetch locale saga
 */
function* fetchLocaleSaga() {
    // try {
    //     const locale = yield call(service.fetchLocale);
    //     yield put(actions.fetchLocaleSuccess(locale));
    // } catch (error) {
    //     yield put(actions.fetchLocaleError(error));
    // }
}

export default function* rootAppSaga() {
    yield all([
        takeLatest(types.FETCH_LOCALE_REQUEST, fetchLocaleSaga)
    ]);
}
