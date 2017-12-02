import {request} from 'utils';
import {API_REQUESTS} from 'constants.js';
import {mapErrorResponse} from 'ducks/shared/mappers';

const appService = {
    fetchI18n(locale) {
        return request.get(API_REQUESTS.I18N, {params: {locale}})
            .then(
                response => ({
                    i18n: response.data
                }),
                mapErrorResponse
            );
    }
};

export default appService;
