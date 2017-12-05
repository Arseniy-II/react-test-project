import actions from './actions';
import service from './service';
import {put, call} from 'redux-saga/effects';

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
