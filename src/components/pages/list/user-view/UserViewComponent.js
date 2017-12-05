import PropTypes from 'prop-types';
import React from 'react';
import {FormattedPlural, FormattedMessage} from 'react-intl';
import {StarIcon, PlayIcon} from 'components/icons';

export default function UserViewComponent(props) {
    const {user, onAddToFavourite, onSaveOffsetTop, isVisible, saveVideoRef, onPlayClick} = props;
    return (
        <div ref={onSaveOffsetTop}
             className={`user-view
            ${user.video ? 'user-view_full' : ''}
            ${isVisible ? 'user-view_visible' : ''}
            `}>
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
                        few={<FormattedMessage id='plurals.age.few'/>}
                        one={<FormattedMessage id='plurals.age.one'/>}
                        other={<FormattedMessage id='plurals.age.many'/>}
                        value={user.age}
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
                <div className="user-view-box">
                    <video ref={saveVideoRef}>
                        <source src={`/videos/${user.video}.mp4`}/>
                    </video>
                    <button className="user-view-video-button" onClick={onPlayClick}>
                        <PlayIcon/>
                    </button>
                </div>
            </div>
            }
        </div>
    );
}

UserViewComponent.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onAddToFavourite: PropTypes.func.isRequired,
    onPlayClick: PropTypes.func.isRequired,
    onSaveOffsetTop: PropTypes.func.isRequired,
    saveVideoRef: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};
