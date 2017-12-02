import React from 'react';
import {FormattedMessage} from 'react-intl';
import ButtonsMenuComponent from 'components/common/buttons-menu/ButtonsMenuComponent';

export default function ListComponent() {
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
                            <a>
                                <FormattedMessage
                                    id='list.id'
                                />
                            </a>
                            <a>
                                <FormattedMessage
                                    id='list.name'
                                />
                            </a>
                            <a>
                                <FormattedMessage
                                    id='list.age'
                                />
                            </a>
                        </ButtonsMenuComponent>
                        <ButtonsMenuComponent>
                            <a>
                                <FormattedMessage
                                    id='list.descending'
                                />
                            </a>
                            <a>
                                <FormattedMessage
                                    id='list.ascending'
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
                            <a>
                                <FormattedMessage
                                    id='list.list'
                                />
                            </a>
                            <a>
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
                <input type="text"/>
            </div>
            <div className="user-list">
                User 1
                User 2
                User 3
            </div>
        </div>);
}
