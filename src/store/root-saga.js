import {appSaga} from 'ducks/app';
import {fork, all} from 'redux-saga/effects';
import {routerSaga} from 'ducks/router';

export default function* rootSaga(dispatch) {
    yield all([
        fork(routerSaga, dispatch),
        fork(appSaga, dispatch)
    ]);
}
