import {combineReducers} from 'redux';
import routerReducer from 'ducks/router';
import appReducer from 'ducks/app';

export default combineReducers({
    app: appReducer,
    routing: routerReducer,
});
