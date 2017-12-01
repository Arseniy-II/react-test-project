import React, {Component} from 'react';
import AppComponent from 'components/app/AppComponent';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class AppContainer extends Component {
    render() {
        return <AppComponent />;
    }
}

export default withRouter(connect(null, null)(AppContainer));
