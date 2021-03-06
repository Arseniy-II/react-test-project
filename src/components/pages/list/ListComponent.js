import ButtonsMenuComponent from 'components/common/buttons-menu/ButtonsMenuComponent';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Routes, SORTING, DIRECTION, APPEARANCE} from 'constants.js';
import {UserContainer, LocaleToggleContainer} from 'containers';

export default function ListComponent(props) {
    const {onRouteChange, onTextChange, query, userList, visibleHeight, onPlayClick, autoPlay} = props;
    const users = userList.map((user, index) => (
        <UserContainer
            appearance={query.appearance}
            autoPlay={autoPlay}
            index={index}
            key={`${user.id}-${index}`}
            onPlayClick={onPlayClick}
            user={user}
            visibleHeight={visibleHeight}
        />
    ));
    return (
        <div className="list">
            <LocaleToggleContainer/>
            <div className="list-block">
                <h3 className="list-title">
                    <FormattedMessage
                        id='list.sorting'
                    />
                </h3>
                <div className="list-buttons-block">
                    <div className="list-buttons-menu">
                        <ButtonsMenuComponent>
                            <a className={`${query.sorting === SORTING.ID ? 'active' : ''}`}
                               onClick={() => {
                                   onRouteChange(Routes.LIST, {...query, sorting: SORTING.ID});
                               }}>
                                <FormattedMessage
                                    id='list.id'
                                />
                            </a>
                            <a className={`${query.sorting === SORTING.NAME ? 'active' : ''}`}
                               onClick={() => {
                                   onRouteChange(Routes.LIST, {...query, sorting: SORTING.NAME});
                               }}>
                                <FormattedMessage
                                    id='list.name'
                                />
                            </a>
                            <a className={`${query.sorting === SORTING.AGE ? 'active' : ''}`}
                               onClick={() => {
                                   onRouteChange(Routes.LIST, {...query, sorting: SORTING.AGE});
                               }}>
                                <FormattedMessage
                                    id='list.age'
                                />
                            </a>
                        </ButtonsMenuComponent>
                    </div>
                    <div className="list-buttons-menu">
                        <ButtonsMenuComponent>
                            <a className={`${query.direction === DIRECTION.ASCENDING ? 'active' : ''}`}
                               onClick={() => {
                                   onRouteChange(Routes.LIST, {...query, direction: DIRECTION.ASCENDING});
                               }}>
                                <FormattedMessage
                                    id='list.ascending'
                                />
                            </a>
                            <a className={`${query.direction === DIRECTION.DESCENDING ? 'active' : ''}`}
                               onClick={() => {
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
                    <h3 className="list-title">
                        <FormattedMessage
                            id='list.view'
                        />
                    </h3>
                    <div className="list-sorting__params">
                        <ButtonsMenuComponent>
                            <a className={`${query.appearance === APPEARANCE.LIST ? 'active' : ''}`}
                               onClick={() => {
                                   onRouteChange(Routes.LIST, {...query, appearance: APPEARANCE.LIST});
                               }}>
                                <FormattedMessage
                                    id='list.list'
                                />
                            </a>
                            <a className={`${query.appearance === APPEARANCE.VIEW ? 'active' : ''}`}
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
            <div className="list-block">
                <h3 className="list-title">
                    <FormattedMessage
                        id='list.search'
                    />
                </h3>
                <input onChange={onTextChange} type="text" value={query.textFilter}/>
            </div>
            <div className="list-block list-user-block">
                <h3 className="list-title">
                    <FormattedMessage
                        id='list.user-list-title'
                    />
                </h3>
                {users}
            </div>
        </div>);
}

ListComponent.propTypes = {
    autoPlay: PropTypes.bool.isRequired,
    onPlayClick: PropTypes.func.isRequired,
    onRouteChange: PropTypes.func.isRequired,
    onTextChange: PropTypes.func.isRequired,
    query: PropTypes.object.isRequired,
    search: PropTypes.string.isRequired,
    userList: PropTypes.arrayOf(PropTypes.object).isRequired,
    visibleHeight: PropTypes.number.isRequired
};
