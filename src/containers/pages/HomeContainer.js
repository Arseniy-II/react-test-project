import {connect} from 'react-redux';
import {HomeComponent} from 'components/pages';
import {routerActions} from 'ducks/router';

export default connect(
    null,
    {
        onRouteChange: routerActions.changeRoute
    }
)(HomeComponent);
