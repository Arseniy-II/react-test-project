import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Routes, APPEARANCE} from 'constants.js';
import ButtonsMenuComponent from 'components/common/buttons-menu/ButtonsMenuComponent';

export default function HomeComponent(props) {
    const {onRouteChange} = props;
    return (
        <div>
            <h1>
                <FormattedMessage id='home.title'/>
            </h1>
            <div>
                <FormattedMessage id="home.content"/>
            </div>
            <div>
                <div>
                    <FormattedMessage id="home.links.git.title"/>
                    : <FormattedMessage id="home.links.git.content"/>
                </div>
                <div>
                    <FormattedMessage id="home.links.email.title"/>
                    : <FormattedMessage id="home.links.email.content"/>
                </div>
            </div>
            <div>
                <ButtonsMenuComponent>
                    <a onClick={() => {onRouteChange(Routes.LIST, {appearance: APPEARANCE.LIST});}}>
                        <FormattedMessage id="list.list"/>
                    </a>
                    <a onClick={() => {onRouteChange(Routes.LIST, {appearance: APPEARANCE.VIEW});}}>
                        <FormattedMessage id="list.view"/>
                    </a>
                </ButtonsMenuComponent>
            </div>
        </div>
    );
}

HomeComponent.propTypes = {
    onRouteChange: PropTypes.func.isRequired
};
