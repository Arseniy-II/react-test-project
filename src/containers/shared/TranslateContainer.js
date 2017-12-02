import 'intl';
import 'intl/locale-data/jsonp/en.js';
import 'intl/locale-data/jsonp/ru.js';
import enLocaleData from 'react-intl/locale-data/en';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ruLocaleData from 'react-intl/locale-data/ru';
import {appSelectors, appActions} from 'ducks/app';
import {connect} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';
import {flattenObject} from 'utils';
import {SpinnerComponent} from 'components/common'

addLocaleData(ruLocaleData);
addLocaleData(enLocaleData);

class TranslateProvider extends Component {
    render() {
        const {locale, i18n} = this.props;
        if (this.props.isLoading && !i18n) {
            return <SpinnerComponent/>
        }
        return (
            <IntlProvider
                locale={locale}
                key={locale} // force update on locale change
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
    locale: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default connect(
    appSelectors.selectLocale,
    null
)(TranslateProvider);
