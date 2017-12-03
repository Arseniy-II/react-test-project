import {LOCATION_CHANGE} from 'react-router-redux';
import {parseQueryString} from 'utils';
import {DEFAULT_QUERY} from 'constants.js';

const initialState = {
    locationBeforeTransitions: null
};

export default (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {

        return {
            locationBeforeTransitions: {
                ...action.payload,
                query: {
                    ...DEFAULT_QUERY,
                    ...parseQueryString(action.payload.search)
                }
            }
        };
    }

    return state;
};
