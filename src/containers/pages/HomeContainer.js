import {HomeComponent} from 'components/pages';
import {connect} from 'react-redux';
import {routerActions} from 'ducks/router';

export default connect(
    null,
    {
        onRouteChange: routerActions.changeRoute
    }
)(HomeComponent);
