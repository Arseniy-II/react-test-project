import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Routes} from 'constants.js';
import {Home, NoMatch, List} from 'components/pages';

function AppComponent() {
    return (
        <Switch>
            <Route exact path={Routes.LIST} component={List}/>
            <Route exact path={Routes.ROOT} component={Home}/>
            <Route component={NoMatch}/>
        </Switch>
    );
}

export default AppComponent;
