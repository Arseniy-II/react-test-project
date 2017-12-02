import 'intl';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import enLocaleData from 'react-intl/locale-data/en';
import PropTypes from 'prop-types';
import React from 'react';
import ruLocaleData from 'react-intl/locale-data/ru';
import {appSelectors} from 'ducks/app';
import {connect} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';

addLocaleData(ruLocaleData);
addLocaleData(enLocaleData);

function TranslateProvider(props) {
    const {locale, i18n} = props;
    return (
        <IntlProvider
            locale={locale}
            messages={i18n}
        >
            {props.children}
        </IntlProvider>
    );
}

TranslateProvider.propTypes = {
    children: PropTypes.element.isRequired,
    i18n: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired
};

export default connect(
    appSelectors.selectLocale,
    null
)(TranslateProvider);
