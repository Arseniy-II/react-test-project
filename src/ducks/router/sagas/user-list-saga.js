import {DEFAULT_QUERY} from 'constants.js';
import {parseQueryString} from 'utils';
import {put, takeLatest, all} from 'redux-saga/effects';
import {userListActions, userListTypes, userListSagas} from 'ducks/user-list';

export default function* userListSaga(action) {
    yield all([
        takeLatest(userListTypes.FETCH_USER_LIST_REQUEST, userListSagas.fetchUserListSaga)
    ]);
    yield put(userListActions.fetchUserListRequest({
        ...DEFAULT_QUERY,
        ...parseQueryString(action.search)
    }));
}
