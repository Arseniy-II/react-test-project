import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Routes} from 'constants.js';
import PropTypes from 'prop-types';
import {ListComponent} from 'components/pages';
import {routerSelectors, routerActions} from 'ducks/router';
import {userListSelectors, userListActions} from 'ducks/user-list';

class ListContainer extends Component {
    static propTypes = {
        sortUserList: PropTypes.func.isRequired,
        onRouteChange: PropTypes.func.isRequired,
        query: PropTypes.object.isRequired,
        userList: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    _changeTextFilter = (e) => {
        this.props.onRouteChange(Routes.LIST, {textFilter: e.target.value});
    };

    render() {
        const {query, userList, onRouteChange} = this.props;
        const {_changeTextFilter} = this;
        return <ListComponent
            onTextChange={_changeTextFilter}
            onRouteChange={onRouteChange}
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
