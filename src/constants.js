export const Routes = {
    ROOT: '/',
    LIST: '/list'
};

export const API = 'api/';

export const API_REQUESTS = {
    I18N: '/i18n',
    USER_LIST: '/userList'
};

export const SORTING = {
    ID: 'id',
    NAME: 'name',
    AGE: 'age'
};

export const DIRECTION = {
    ASCENDING: 'ascending',
    DESCENDING: 'descending'
};

export const APPEARANCE = {
    LIST: 'list',
    VIEW: 'view'
};

export const DEFAULT_QUERY = {
    sorting: SORTING.ID,
    direction: DIRECTION.DESCENDING,
    textFilter: '',
    appearance: APPEARANCE.LIST
};

export const LOCALES = {
    DEFAULT: 'ru',
    EN: 'en',
    RU: 'ru'
};
