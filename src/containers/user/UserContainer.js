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
        appearance: PropTypes.string.isRequired,
        addToFavourite: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        onPlayClick: PropTypes.func.isRequired,
        autoPlay: PropTypes.bool.isRequired,
        visibleHeight: PropTypes.number.isRequired
    };
    static DEFAULT_TIMEOUT = 400;
    static MAX_TIMEOUT = 2000;

    _timer = null;
    _video = null;

    constructor(props) {
        super(props);
        this.state = {
            offsetTop: null,
            timeOut: false,
            offsetBottom: null
        };
    }

    componentDidMount() {
        const timeout = UserContainer.MAX_TIMEOUT < this.props.index * UserContainer.DEFAULT_TIMEOUT ?
            UserContainer.MAX_TIMEOUT : this.props.index * UserContainer.DEFAULT_TIMEOUT;
        this._timer = setTimeout(() => {
            this.setState({
                timeOut: true
            });
        }, timeout);
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    componentWillReceiveProps() {
        const {user, visibleHeight, appearance, autoPlay} = this.props;
        const {offsetTop, height, timeOut} = this.state;
        const {_video} = this;
        const Y_ELEMENT = offsetTop + (height / 2);
        const Y_TOP = window.scrollY + (window.innerHeight / 2) - (height / 2);
        const Y_BOTTOM = window.scrollY + (window.innerHeight / 2) + (height / 2);

        if (appearance === APPEARANCE.LIST || !user.video || !autoPlay || !timeOut) {
            return;
        }
        if (Y_TOP <= Y_ELEMENT && Y_ELEMENT <= Y_BOTTOM) {
            _video.play();
            console.log('play');
        } else {
            _video.pause();
            console.log('pause');
        }
    }

    _checkIsVisible = (element) => {
        if (element) {
            this.setState({
                offsetTop: element.offsetTop,
                height: element.clientHeight
            });
        }
    };

    _saveVideoRef = (videoElement) => {
        this._video = videoElement
    };

    _onPlayClick = () => {
        const video = this._video;
        const isVideoPlaying = video.currentTime > 0 && !video.paused && !video.ended;
        if (isVideoPlaying) {
            video.pause();
        } else {
            video.play();
        }
    };

    _onManualPlayClick = () => {
        this.props.onPlayClick();
        this._onPlayClick();
    };

    render() {
        const {user, addToFavourite, appearance, visibleHeight, index, autoPlay} = this.props;
        const {offsetTop, timeOut} = this.state;
        const {_checkIsVisible, _saveVideoRef, _onPlayClick, _onManualPlayClick} = this;
        const isVisible = !!offsetTop && timeOut && visibleHeight >= offsetTop;
        return (
            appearance === APPEARANCE.LIST ?
                <UserListComponent
                    user={user}
                    index={index}
                    isVisible={isVisible}
                    onSaveOffsetTop={_checkIsVisible}
                    onAddToFavourite={addToFavourite}
                /> :
                <UserViewComponent
                    saveVideoRef={_saveVideoRef}
                    onPlayClick={_onManualPlayClick}
                    autoPlay={autoPlay}
                    user={user}
                    index={index}
                    isVisible={isVisible}
                    onSaveOffsetTop={_checkIsVisible}
                    onAddToFavourite={addToFavourite}
                />
        );
    }
}

export default connect(
    null
    , {
        addToFavourite: userListActions.addToFavourite
    }
)
(UserContainer);
