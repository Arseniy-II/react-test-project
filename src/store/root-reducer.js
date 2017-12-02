import {combineReducers} from 'redux';
import routerReducer from 'ducks/router';
import appReducer from 'ducks/app';
import userListReducer from 'ducks/user-list';

export default combineReducers({
    userList: userListReducer,
    app: appReducer,
    routing: routerReducer
});
