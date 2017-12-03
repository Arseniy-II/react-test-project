import React from 'react';
import PropTypes from 'prop-types';

export default function UserListComponent(props) {
    const {user} = props;
    return(
        <div>
            <div style={{
                backgroundImage: `url(assets/images/${user.image})` // TODO check url
            }}/>
            <div>
                name {user.name}
            </div>
            <div>
                age {user.age}
            </div>
            <div>
                phone {user.phone}
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
