import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Routes} from 'constants.js';
import {
    NoMatchComponent
} from 'components/pages';
import {
    ListContainer,
    HomeContainer
} from 'containers';

function AppComponent() {
    return (
        <Switch>
            <Route exact path={Routes.LIST} component={ListContainer}/>
            <Route exact path={Routes.ROOT} component={HomeContainer}/>
            <Route component={NoMatchComponent}/>
        </Switch>
    );
}

export default AppComponent;
