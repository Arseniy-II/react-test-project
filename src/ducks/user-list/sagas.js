import actions from './actions';
import {put, call} from 'redux-saga/effects';
import service from './service';

export default {
    fetchUserListSaga: function* ({query}) {
        try {
            const {userList} = yield call(service.fetchUserList);
            yield put(actions.fetchUserListSuccess(userList, query));
        } catch (error) {
            yield put(actions.fetchUserListError(error));
        }
    }
};
