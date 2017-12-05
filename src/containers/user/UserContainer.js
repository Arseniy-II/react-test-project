import PropTypes from 'prop-types';
import React, {Component} from 'react';
import UserListComponent from 'components/pages/list/user-list/UserListComponent';
import UserViewComponent from 'components/pages/list/user-view/UserViewComponent';
import {APPEARANCE} from 'constants.js';
import {connect} from 'react-redux';
import {userListActions} from 'ducks/user-list';

class UserContainer extends Component {
    static propTypes = {
        addToFavourite: PropTypes.func.isRequired,
        appearance: PropTypes.string.isRequired,
        autoPlay: PropTypes.bool.isRequired,
        index: PropTypes.number.isRequired,
        onPlayClick: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        visibleHeight: PropTypes.number.isRequired
    };
    static DEFAULT_TIMEOUT = 400;
    static MAX_TIMEOUT = 2000;

    _timer = null;
    _video = null;

    constructor(props) {
        super(props);
        this.state = {
            height: null,
            offsetTop: null,
            timeOut: false
        };
    }

    componentDidMount() {
        this._launchTimeOutForAnimation();
    }

    componentWillUnmount() {
        clearTimeout(this._timer);
    }

    componentWillReceiveProps() {
        this._handelVideoAutoPlay();
    }

    /**
     * Play video if it on the screen center (it is possible for only one video to be at center)
     *
     * @private
     */
    _handelVideoAutoPlay = () => {
        const {user, appearance, autoPlay} = this.props;
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
        } else {
            _video.pause();
        }
    };

    /**
     * Set timeout to delay animation for later elements
     *
     * @private
     */
    _launchTimeOutForAnimation = () => {
        const timeout = UserContainer.MAX_TIMEOUT < this.props.index * UserContainer.DEFAULT_TIMEOUT ?
            UserContainer.MAX_TIMEOUT : this.props.index * UserContainer.DEFAULT_TIMEOUT;
        this._timer = setTimeout(() => {
            this.setState({
                timeOut: true
            });
        }, timeout);
    };

    /**
     * Check if window scrolled up to the element
     *
     * @param {Object} element
     * @private
     */
    _checkIsVisible = (element) => {
        if (element) {
            this.setState({
                offsetTop: element.offsetTop,
                height: element.clientHeight
            });
        }
    };

    /**
     * Save video ref so it is possible to play/pause from container
     *
     * @param {Object} videoElement
     * @private
     */
    _saveVideoRef = (videoElement) => {
        this._video = videoElement;
    };

    /**
     * Synthetic play/pause handler
     *
     * @private
     */
    _onPlayClick = () => {
        const video = this._video;
        const isVideoPlaying = video.currentTime > 0 && !video.paused && !video.ended;
        if (isVideoPlaying) {
            video.pause();
        } else {
            video.play();
        }
    };

    /**
     * User play click (prevent auto play)
     *
     * @private
     */
    _onManualPlayClick = () => {
        this.props.onPlayClick();
        this._onPlayClick();
    };

    render() {
        const {user, addToFavourite, appearance, visibleHeight, index, autoPlay} = this.props;
        const {offsetTop, timeOut} = this.state;
        const {_checkIsVisible, _saveVideoRef, _onManualPlayClick} = this;
        const isVisible = !!offsetTop && timeOut && visibleHeight >= offsetTop;
        return (
            appearance === APPEARANCE.LIST ?
                <UserListComponent
                    index={index}
                    isVisible={isVisible}
                    onAddToFavourite={addToFavourite}
                    onSaveOffsetTop={_checkIsVisible}
                    user={user}
                /> :
                <UserViewComponent
                    autoPlay={autoPlay}
                    index={index}
                    isVisible={isVisible}
                    onAddToFavourite={addToFavourite}
                    onPlayClick={_onManualPlayClick}
                    onSaveOffsetTop={_checkIsVisible}
                    saveVideoRef={_saveVideoRef}
                    user={user}
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
