import React, {Component} from 'react';
import UserListComponent from 'components/pages/list/user-list/UserListComponent';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userListActions} from 'ducks/user-list';

class UserListContainer extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        addToFavourite: PropTypes.func.isRequired
    };

    render() {
        const {user, addToFavourite} = this.props;
        return (
          <UserListComponent
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
)(UserListContainer);
