import React, {Component} from 'react';
import UserListComponent from 'components/pages/list/user-list/UserListComponent';
import UserViewComponent from 'components/pages/list/user-view/UserViewComponent';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userListActions} from 'ducks/user-list';
import {APPEARANCE} from 'constants.js';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offsetTop: null
        };
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        appearance: PropTypes.string.isRequired,
        addToFavourite: PropTypes.func.isRequired,
        visibleHeight: PropTypes.number.isRequired
    };

    _checkIsVisible = (element) => {
        if (element) {
            this.setState({
                offsetTop: element.offsetTop
            });
        }
    };

    render() {
        const {user, addToFavourite, appearance, visibleHeight} = this.props;
        const {offsetTop} = this.state;
        const {_checkIsVisible} = this;
        const isVisible = !!offsetTop && visibleHeight >= offsetTop;
        return (
            appearance === APPEARANCE.LIST ?
                <UserListComponent
                    user={user}
                    isVisible={isVisible}
                    onSaveOffsetTop={_checkIsVisible}
                    onAddToFavourite={addToFavourite}
                /> :
                <UserViewComponent
                    user={user}
                    isVisible={isVisible}
                    onSaveOffsetTop={_checkIsVisible}
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
