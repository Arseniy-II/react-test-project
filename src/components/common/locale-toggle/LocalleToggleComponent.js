import React from 'react'
import PropTypes from 'prop-types'
import {LOCALES} from 'constants.js';

export default function LocaleToggleComponent(props) {
    const {onLocaleChange} = props;
    return (
        <div className="locale-container">
            <a className="locale-item" onClick={() => {onLocaleChange(LOCALES.RU)}}>{LOCALES.RU}</a>
            <a className="locale-item" onClick={() => {onLocaleChange(LOCALES.EN)}}>{LOCALES.EN}</a>
        </div>
    )
}

LocaleToggleComponent.propTypes = {
    onLocaleChange: PropTypes.func.isRequired
};
