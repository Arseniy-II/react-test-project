import {put, takeLatest, all} from 'redux-saga/effects';
import {userListActions, userListTypes, userListSagas} from 'ducks/user-list';

export default function* userListSaga() {
    yield all([
        takeLatest(userListTypes.FETCH_USER_LIST_REQUEST, userListSagas.fetchUserListSaga)
    ]);
    yield put(userListActions.fetchUserListRequest());
}
