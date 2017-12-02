import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Routes} from 'constants.js';
import {
    NoMatchComponent,
    ListComponent
} from 'components/pages';
import {
    HomeContainer
} from 'containers';

function AppComponent() {
    return (
        <Switch>
            <Route exact path={Routes.LIST} component={ListComponent}/>
            <Route exact path={Routes.ROOT} component={HomeContainer}/>
            <Route component={NoMatchComponent}/>
        </Switch>
    );
}

export default AppComponent;
