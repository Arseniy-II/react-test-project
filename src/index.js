import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {TranslateContainer as TranslateProvider, AppContainer as App} from 'containers';
import store, {history} from 'store';

window.Intl = require('intl');

const renderApp = Component =>
    render(
        <AppContainer>
            <Provider store={store}>
                <TranslateProvider>
                    <ConnectedRouter history={history}>
                        <Component/>
                    </ConnectedRouter>
                </TranslateProvider>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );

renderApp(App);
if (module.hot) {module.hot.accept('containers', () => renderApp(App));}
