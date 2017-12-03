import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer as HotLoader} from 'react-hot-loader';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {TranslateContainer, AppContainer} from 'containers';
import store, {history} from 'store';

window.Intl = require('intl');

const renderApp = Component =>
    render(
        <HotLoader>
            <Provider store={store}>
                <TranslateContainer>
                    <ConnectedRouter history={history}>
                        <Component/>
                    </ConnectedRouter>
                </TranslateContainer>
            </Provider>
        </HotLoader>,
        document.getElementById('app')
    );

renderApp(AppContainer);
if (module.hot) {module.hot.accept('containers', () => renderApp(AppContainer));}

// TODO check docs especially for ducks
// TODO check lodash. I never use it (remove from dependencies)
