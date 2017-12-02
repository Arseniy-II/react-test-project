import {fork, all} from 'redux-saga/effects';
// import {routerSaga} from 'ducks/router';
import {appSaga} from 'ducks/app';

export default function* rootSaga(dispatch) {
    yield all([
        // fork(routerSaga, dispatch),
        fork(appSaga, dispatch)
    ]);
}
