import {request} from 'utils';
import {API_REQUESTS} from 'constants.js';
import {mapErrorResponse} from 'ducks/shared/mappers';

const userListService = {
    fetchUserList() {
        return request.get(API_REQUESTS.USER_LIST)
            .then(
                response => ({
                    userList: response.data
                }),
                mapErrorResponse
            );
    }
};

export default userListService;
