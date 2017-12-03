import React, {Component} from 'react';
import UserViewComponent from 'components/pages/list/user-view/UserviewComponent';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userListActions} from 'ducks/user-list';

class UserViewContainer extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        addToFavourite: PropTypes.func.isRequired
    };

    render() {
        const {user, addToFavourite} = this.props;
        return (
            <UserViewComponent
                user={user}
                onAddToFavourite={addToFavourite}
            />
        );
    }
}

export default connect(
    null,
    {
        addToFavourite: userListActions.addToFavourite
    }
)(UserViewContainer);
