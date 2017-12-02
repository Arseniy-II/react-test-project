import actions from './actions';
import {put, call} from 'redux-saga/effects';
import service from './service';

export default {
    fetchUserListSaga: function* () {
        try {
            const {userList} = yield call(service.fetchUserList);
            yield put(actions.fetchUserListSuccess(userList));
        } catch (error) {
            yield put(actions.fetchUserListError(error));
        }
    }
};
