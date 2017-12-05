import ButtonsMenuComponent from 'components/common/buttons-menu/ButtonsMenuComponent';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {LocaleToggleContainer} from 'containers';
import {Routes, APPEARANCE} from 'constants.js';

export default function HomeComponent(props) {
    const {onRouteChange} = props;
    return (
        <div className="home">
            <LocaleToggleContainer/>
            <h1 className="home-title">
                <FormattedMessage id='home.title'/>
            </h1>
            <div className="home-block">
                <h3 className="home-header">
                    <FormattedMessage id="home.content-title"/>
                </h3>
                <FormattedMessage id="home.content"/>
            </div>
            <div className="home-block">
                <h3 className="home-header">
                    <FormattedMessage id="home.links-title"/>
                </h3>
                <div>
                    <FormattedMessage id="home.links.git.title"/>
                    : <FormattedMessage id="home.links.git.content"/>
                </div>
                <div>
                    <FormattedMessage id="home.links.email.title"/>
                    : <FormattedMessage id="home.links.email.content"/>
                </div>
            </div>
            <div className="home-block">
                <h3 className="home-header">
                    <FormattedMessage id="home.buttons-title"/>
                </h3>
                <ButtonsMenuComponent>
                    <a onClick={() => {onRouteChange(Routes.LIST, {appearance: APPEARANCE.LIST});}}>
                        <FormattedMessage id="list.list"/>
                    </a>
                    <a onClick={() => {onRouteChange(Routes.LIST, {appearance: APPEARANCE.VIEW});}}>
                        <FormattedMessage id="list.preview"/>
                    </a>
                </ButtonsMenuComponent>
            </div>
        </div>
    );
}

HomeComponent.propTypes = {
    onRouteChange: PropTypes.func.isRequired
};
