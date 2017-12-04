import AppComponent from 'components/app/AppComponent';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

export default withRouter(connect(null, null)(AppComponent));
