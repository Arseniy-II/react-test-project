import {LOCATION_CHANGE} from 'react-router-redux';
import {parseQueryString} from 'utils';

const initialState = {
    locationBeforeTransitions: null
};

export default (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {

        return {
            locationBeforeTransitions: {
                ...action.payload,
                query: parseQueryString(action.payload.search)
            }
        };
    }

    return state;
};
