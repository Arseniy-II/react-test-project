import types from './types';

export const initialAppState = {
    isLoading: true,
    error: null,
    locale: 'ru'
};

export default function (state = initialAppState, action) {
    switch (action.type) {
        case types.INIT_APPLICATION_START:
            return state.set('isLoading', true);
        default:
            return state;
    }
}
