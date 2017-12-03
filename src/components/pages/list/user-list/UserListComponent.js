import React from 'react';
import PropTypes from 'prop-types';

export default function UserListComponent(props) {
    const {user} = props;
    return(
        <div>
            <div style={{
                backgroundImage: `url(assets/images/${user.image})` // TODO check url
            }}>
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {user.age}
            </div>
            <div>
                {user.phone}
            </div>
            <div>
                {user.favourite && 'star'}
            </div>
        </div>
    );
}

UserListComponent.propTypes = {
    user: PropTypes.object.isRequired
};
