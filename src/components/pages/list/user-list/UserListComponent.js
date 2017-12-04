import React from 'react';
import PropTypes from 'prop-types';
import {FormattedPlural, FormattedMessage} from 'react-intl';
import {StarIcon} from 'components/icons';

export default function UserListComponent(props) {
    const {user, onAddToFavourite, onSaveOffsetTop, isVisible} = props;
    return (
        <div ref={onSaveOffsetTop}
             className={`user-list
            ${isVisible ? 'user-list_visible' : ''}
            `}>

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
                    few={<FormattedMessage id='plurals.age.few'/>}
                    one={<FormattedMessage id='plurals.age.one'/>}
                    other={<FormattedMessage id='plurals.age.many'
                    value={user.age}
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
    isVisible: PropTypes.bool.isRequired,
    onAddToFavourite: PropTypes.func.isRequired,
    onSaveOffsetTop: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};
