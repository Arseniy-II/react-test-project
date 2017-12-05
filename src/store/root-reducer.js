import appReducer from 'ducks/app';
import routerReducer from 'ducks/router';
import userListReducer from 'ducks/user-list';
import {combineReducers} from 'redux';

export default combineReducers({
    app: appReducer,
    userList: userListReducer,
    routing: routerReducer
});
