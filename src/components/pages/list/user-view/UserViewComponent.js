import React from 'react';
import PropTypes from 'prop-types';

export default function UserListComponent(props) {
    const {user} = props;
    return(
        <div>
            user
        </div>
    );
}

UserListComponent.propTypes = {
    user: PropTypes.object.isRequired
};
