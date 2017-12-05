import {appActions} from 'ducks/app';
import {connect} from 'react-redux';
import {LocaleToggleComponent} from 'components/common';

export default connect(null, {
    onLocaleChange: appActions.fetchI18nRequest
})(LocaleToggleComponent);
