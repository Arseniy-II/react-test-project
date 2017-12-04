import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListComponent} from 'components/pages';
import {routerSelectors, routerActions} from 'ducks/router';
import {Routes} from 'constants.js';
import {userListSelectors, userListActions} from 'ducks/user-list';

class ListContainer extends Component {
    static propTypes = {
        onRouteChange: PropTypes.func.isRequired,
        query: PropTypes.object.isRequired,
        search: PropTypes.string.isRequired,
        sortUserList: PropTypes.func.isRequired,
        userList: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: window.innerHeight + window.scrollY,
            autoPlay: true
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this._setHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._setHeight);
    }

    /**
     * Save window scroll bottom position to state
     *
     * @type {Function}
     * @private
     */
    _setHeight = debounce(() => {
        this.setState({visibleHeight: window.innerHeight + window.scrollY});
    }, 200);

    /**
     * Change route reset state
     *
     * @param {string} route
     * @param {Object} params
     * @private
     */
    _onRouteChange = (route, params) => {
        this._setHeight();
        this.props.onRouteChange(route, params);
    };

    /**
     * Change route when user types in input field
     *
     * @param {Event} event
     * @private
     */
    _changeTextFilter = (event) => {
        this._setHeight();
        this.props.onRouteChange(Routes.LIST, {
            ...this.props.query,
            textFilter: event.target.value
        });
    };

    /**
     * Forbid auto play when user clicks play manually
     *
     * @private
     */
    _onPlayClick = () => {
        this.setState({autoPlay: false});
    };

    render() {
        const {query, userList, search} = this.props;
        const {_changeTextFilter, _onRouteChange, _onPlayClick} = this;
        const {visibleHeight, autoPlay} = this.state;
        return <ListComponent
            autoPlay={autoPlay}
            onPlayClick={_onPlayClick}
            onRouteChange={_onRouteChange}
            onTextChange={_changeTextFilter}
            query={query}
            search={search}
            userList={userList}
            visibleHeight={visibleHeight}
        />;
    }
}

export default connect(
    state => ({
        ...routerSelectors.selectQuery(state),
        ...routerSelectors.selectSearch(state),
        ...userListSelectors.selectUserList(state)
    }),
    {
        onRouteChange: routerActions.changeRoute,
        sortUserList: userListActions.sortUserList
    }
)(ListContainer);
