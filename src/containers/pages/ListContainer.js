import React, {Component} from 'react';
import debounce from 'lodash/debounce';
import {connect} from 'react-redux';
import {Routes} from 'constants.js';
import PropTypes from 'prop-types';
import {ListComponent} from 'components/pages';
import {routerSelectors, routerActions} from 'ducks/router';
import {userListSelectors, userListActions} from 'ducks/user-list';

class ListContainer extends Component {
    static propTypes = {
        search: PropTypes.string.isRequired,
        sortUserList: PropTypes.func.isRequired,
        onRouteChange: PropTypes.func.isRequired,
        query: PropTypes.object.isRequired,
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

    _setHeight = debounce(() => {
        this.setState({visibleHeight: window.innerHeight + window.scrollY});
    }, 200);

    _onRouteChange = (route, params) => {
        this._setHeight();
        this.props.onRouteChange(route, params);
    };

    _changeTextFilter = (e) => {
        this._setHeight();
        this.props.onRouteChange(Routes.LIST, {
            ...this.props.query,
            textFilter: e.target.value
        });
    };

    _onPlayClick = () => {
        this.setState({autoPlay: false});
    };

    render() {
        const {query, userList, search} = this.props;
        const {_changeTextFilter, _onRouteChange, _onPlayClick} = this;
        const {visibleHeight, autoPlay} = this.state;
        return <ListComponent
            onPlayClick={_onPlayClick}
            autoPlay={autoPlay}
            search={search}
            visibleHeight={visibleHeight}
            onTextChange={_changeTextFilter}
            onRouteChange={_onRouteChange}
            query={query}
            userList={userList}
        />;
    }
}

export default connect(
    state => ({
        ...routerSelectors.selectSearch(state),
        ...routerSelectors.selectQuery(state),
        ...userListSelectors.selectUserList(state)
    }),
    {
        sortUserList: userListActions.sortUserList,
        onRouteChange: routerActions.changeRoute
    }
)(ListContainer);
