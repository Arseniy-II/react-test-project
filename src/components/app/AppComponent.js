import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Routes} from 'constants.js';
import LayoutComponent from 'components/layout/LayoutComponent';
import {Home, NoMatch, List, Preview} from 'components/pages';

function AppComponent() {
    return <Switch>
        <LayoutComponent path={Routes.PREVIEW}>
            <Preview/></LayoutComponent>
        <LayoutComponent path={Routes.LIST}>
            <List/></LayoutComponent>
        <Route exact path={Routes.ROOT} component={Home}/>
        <Route component={NoMatch}/>
    </Switch>;
}

export default AppComponent;
