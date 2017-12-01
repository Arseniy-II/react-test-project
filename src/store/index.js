import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const reduxRouterMiddleware = routerMiddleware(history);
const initialState = {};

let middleware = [
    reduxRouterMiddleware,
    sagaMiddleware
];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);

sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
