import React from 'react';
import {Routes} from 'constants.js';
import {Switch, Route} from 'react-router-dom';

import {
    ListContainer,
    HomeContainer
} from 'containers';

function AppComponent() {
    return (
        <Switch>
            <Route exact path={Routes.LIST} component={ListContainer}/>
            <Route exact path={Routes.ROOT} component={HomeContainer}/>
        </Switch>
    );
}

export default AppComponent;
