import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Routes} from 'constants.js';
import PropTypes from 'prop-types';
import {ListComponent} from 'components/pages';
import {routerSelectors, routerActions} from 'ducks/router';
import {userListSelectors, userListActions} from 'ducks/user-list';

class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offsets: [],
            lastVisibleIndex: 0
        };
    }

    static propTypes = {
        sortUserList: PropTypes.func.isRequired,
        onRouteChange: PropTypes.func.isRequired,
        query: PropTypes.object.isRequired,
        userList: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    _ADDITIONAL_OFFSET = window.innerHeight * 0.15;

    _saveOffsetTop = (element) => {
        if (element) {
            this.setState((prevState) => ({
                offsets: prevState.offsets.concat(element.offsetTop),
                lastVisibleIndex: window.innerHeight - this._ADDITIONAL_OFFSET > element.offsetTop ?
                    prevState.lastVisibleIndex + 1 : prevState.lastVisibleIndex
            }));
        }
    };

    _onRouteChange = (route, params) => {
        this.setState({
            offsets: [],
            lastVisibleIndex: 0
        });
        this.props.onRouteChange(route, params);
    };

    _changeTextFilter = (e) => {
        this.props.onRouteChange(Routes.LIST, {
            ...this.props.query,
            textFilter: e.target.value
        });
    };

    render() {
        const {query, userList} = this.props;
        const {_changeTextFilter, _saveOffsetTop, _onRouteChange} = this;
        const {lastVisibleIndex} = this.state;
        return <ListComponent
            lastVisibleIndex={lastVisibleIndex}
            onSaveOffsetTop={_saveOffsetTop}
            onTextChange={_changeTextFilter}
            onRouteChange={_onRouteChange}
            query={query}
            userList={userList}
        />;
    }
}

export default connect(
    state => ({
        ...routerSelectors.selectQuery(state),
        ...userListSelectors.selectUserList(state)
    }),
    {
        sortUserList: userListActions.sortUserList,
        onRouteChange: routerActions.changeRoute
    }
)(ListContainer);
