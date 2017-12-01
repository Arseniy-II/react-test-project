import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import ruLocaleData from 'react-intl/locale-data/ru';
import 'intl';
import 'intl/locale-data/jsonp/fr.js';

addLocaleData(ruLocaleData);

function TranslateProvider(props) {
    return (
        <IntlProvider
            locale={'ru'}
            messages={null}
        >
            {props.children}
        </IntlProvider>
    );
}

export default connect(null)(TranslateProvider);
