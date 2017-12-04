import 'intl';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import enLocaleData from 'react-intl/locale-data/en';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ruLocaleData from 'react-intl/locale-data/ru';
import {appSelectors} from 'ducks/app';
import {connect} from 'react-redux';
import {flattenObject} from 'utils';
import {IntlProvider, addLocaleData} from 'react-intl';
import {SpinnerComponent} from 'components/common';

addLocaleData(enLocaleData);
addLocaleData(ruLocaleData);

class TranslateProvider extends Component {
    render() {
        const {locale, i18n} = this.props;
        if (this.props.isFetching && !i18n) {
            return <SpinnerComponent />;
        }
        return (
            <IntlProvider
                key={locale} // force component to update on locale change
                locale={locale}
                messages={flattenObject(i18n)}
            >
                <div>
                    {this.props.children}
                </div>
            </IntlProvider>
        );
    }
}

TranslateProvider.propTypes = {
    children: PropTypes.element.isRequired,
    i18n: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
    locale: PropTypes.string.isRequired
};

export default connect(
    appSelectors.selectLocale,
    null
)(TranslateProvider);
