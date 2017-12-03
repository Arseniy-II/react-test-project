import React from 'react';
import PropTypes from 'prop-types';
import {FormattedPlural, FormattedMessage} from 'react-intl';
import {StarIcon} from 'components/icons';

export default function UserViewComponent(props) {
    const {user, onAddToFavourite} = props;
    return (
        <div className={`user-view ${user.video ? 'user-view_full' : ''}`}>
            <div className="user-view-info">

                <div className="info-block">
                    <div className="info-user">
                        <div className="info-avatar"
                             style={{
                                 backgroundImage: `url(/images/${user.image}.svg)`
                             }}/>
                        <div className="info-name">
                            {user.name}
                        </div>
                    </div>
                    <div className={`info-star ${user.favourite ? 'info-star_active' : ''}`}>
                        <div className="icon-container"
                             onClick={() => {
                                 onAddToFavourite(user.id);
                             }}>
                            <StarIcon/>
                        </div>
                    </div>
                </div>

                <div className="info-block">
                    {user.age}&nbsp;
                    <FormattedPlural
                        value={user.age}
                        one={<FormattedMessage id='plurals.age.one'/>}
                        few={<FormattedMessage id='plurals.age.few'/>}
                        other={<FormattedMessage id='plurals.age.many'/>}
                    />
                </div>

                <div className="info-block">
                    {user.phone}
                </div>

                <div className="info-block">
                    {user.phrase}
                </div>

            </div>
            {user.video &&
            <div className="user-view-video">
                <video controls="controls">
                    <source src={`/videos/${user.video}.mp4`}/>
                </video>
            </div>
            }
        </div>
    );
}

UserViewComponent.propTypes = {
    user: PropTypes.object.isRequired,
    onAddToFavourite: PropTypes.func.isRequired
};
