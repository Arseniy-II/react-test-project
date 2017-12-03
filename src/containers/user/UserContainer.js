import React, {Component} from 'react';
import UserListComponent from 'components/pages/list/user-list/UserListComponent';
import UserViewComponent from 'components/pages/list/user-view/UserViewComponent';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userListActions} from 'ducks/user-list';
import {APPEARANCE} from 'constants.js';

class UserContainer extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        isVisible: PropTypes.bool.isRequired,
        appearance: PropTypes.string.isRequired,
        addToFavourite: PropTypes.func.isRequired,
        onSaveOffsetTop: PropTypes.func.isRequired
    };

    render() {
        const {user, addToFavourite, onSaveOffsetTop, isVisible, appearance} = this.props;
        return (
            appearance === APPEARANCE.LIST ?
                <UserListComponent
                    user={user}
                    isVisible={isVisible}
                    onSaveOffsetTop={onSaveOffsetTop}
                    onAddToFavourite={addToFavourite}
                /> :
                <UserViewComponent
                    user={user}
                    isVisible={isVisible}
                    onSaveOffsetTop={onSaveOffsetTop}
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
)(UserContainer);
