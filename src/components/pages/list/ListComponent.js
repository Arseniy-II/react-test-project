import React from 'react';
import PropTypes from 'prop-types';
import {Routes, SORTING, DIRECTION, APPEARANCE} from 'constants.js';
import {FormattedMessage} from 'react-intl';
import UserViewComponent from './user-view/UserViewComponent';
import UserListComponent from './user-list/UserListComponent';
import ButtonsMenuComponent from 'components/common/buttons-menu/ButtonsMenuComponent';

export default function ListComponent(props) {
    const {onRouteChange, onTextChange, query, userList} = props;
    const users = userList.map(user => (query.appearance === APPEARANCE.LIST ?
            <UserListComponent key={user.id} user={user}/> :
            <UserViewComponent key={user.id} user={user}/>
    ));
    return (
        <div>
            <div className="list-menu">
                <div className="list-sorting">
                    <div className="list-menu__title">
                        <FormattedMessage
                            id='list.sorting'
                        />
                    </div>
                    <div className="list-sorting__params">
                        <ButtonsMenuComponent>
                            <a onClick={() => {
                                onRouteChange(Routes.LIST, {...query, sorting: SORTING.ID});
                            }}>
                                <FormattedMessage
                                    id='list.id'
                                />
                            </a>
                            <a onClick={() => {
                                onRouteChange(Routes.LIST, {...query, sorting: SORTING.NAME});
                            }}>
                                <FormattedMessage
                                    id='list.name'
                                />
                            </a>
                            <a onClick={() => {
                                onRouteChange(Routes.LIST, {...query, sorting: SORTING.AGE});
                            }}>
                                <FormattedMessage
                                    id='list.age'
                                />
                            </a>
                        </ButtonsMenuComponent>
                        <ButtonsMenuComponent>
                            <a onClick={() => {
                                onRouteChange(Routes.LIST, {...query, direction: DIRECTION.ASCENDING});
                            }}>
                                <FormattedMessage
                                    id='list.ascending'
                                />
                            </a>
                            <a onClick={() => {
                                onRouteChange(Routes.LIST, {...query, direction: DIRECTION.DESCENDING});
                            }}>
                                <FormattedMessage
                                    id='list.descending'
                                />
                            </a>
                        </ButtonsMenuComponent>
                    </div>
                </div>
                <div className="list-view">
                    <div className="list-menu__title">
                        <FormattedMessage
                            id='list.view'
                        />
                    </div>
                    <div className="list-sorting__params">
                        <ButtonsMenuComponent>
                            <a
                                onClick={() => {
                                    onRouteChange(Routes.LIST, {...query, appearance: APPEARANCE.LIST});
                                }}>
                                <FormattedMessage
                                    id='list.list'
                                />
                            </a>
                            <a
                                onClick={() => {
                                    onRouteChange(Routes.LIST, {...query, appearance: APPEARANCE.VIEW});
                                }}>
                                <FormattedMessage
                                    id='list.preview'
                                />
                            </a>
                        </ButtonsMenuComponent>
                    </div>
                </div>
            </div>
            <div className="list-search">
                <FormattedMessage
                    id='list.search'
                />
                <input onChange={onTextChange} type="text" value={query.textFilter}/>
            </div>
            <div className="user-list">
                {users}
            </div>
        </div>);
}

ListComponent.propTypes = {
    onTextChange: PropTypes.func.isRequired,
    onRouteChange: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    userList: PropTypes.arrayOf(PropTypes.object).isRequired
};
