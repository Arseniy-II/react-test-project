import React from 'react';
import PropTypes from 'prop-types';
import {FormattedPlural, FormattedMessage} from 'react-intl';
import {StarIcon} from 'components/icons';

export default function UserListComponent(props) {
    const {user, onAddToFavourite} = props;
    return (
        <div className="user-list">
            <div className="user-list-block user-list-main">
                <div className="user-list-avatar"
                     style={{
                         backgroundImage: `url(/images/${user.image}.svg)`
                     }}/>
                <div className="user-list-name">
                    {user.name}
                </div>
            </div>
            <div className="user-list-block">
                {user.age}&nbsp;
                <FormattedPlural
                    value={user.age}
                    one={<FormattedMessage id='plurals.age.one'/>}
                    few={<FormattedMessage id='plurals.age.few'/>}
                    other={<FormattedMessage id='plurals.age.many'
                    />}
                />
            </div>
            <div className="user-list-block">
                {user.phone}
            </div>
            <div className={`user-list-block user-list-star ${user.favourite ? 'user-list-star_active' : ''}`}>
                <div onClick={() => {
                    onAddToFavourite(user.id);
                }} className="icon-container">
                    <StarIcon/>
                </div>
            </div>
        </div>
    );
}

UserListComponent.propTypes = {
    user: PropTypes.object.isRequired,
    onAddToFavourite: PropTypes.func.isRequired
};
