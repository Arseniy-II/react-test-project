import {LocaleToggleComponent} from 'components/common';
import {connect} from 'react-redux';
import {appActions} from 'ducks/app';

export default connect(null, {
    onLocaleChange: appActions.fetchI18nRequest
})(LocaleToggleComponent)
