import {DIRECTION} from 'constants.js';

/**
 * Sort users depends on query
 *
 * @param {Array} userList
 * @param {Object} query
 * @returns {{byId: {}, allIds: Array}}
 */
export default (userList, query) => {
    const byId = {};
    const allIds = [];

    const filteredUserList = userList.filter(user => {
        const userField = ('' + user[query.sorting]).toLowerCase();
        const searchField = query.textFilter.toLowerCase();
        return userField.indexOf(searchField) !== -1;
    });

    const sortedFilteredUserList = filteredUserList.sort((user1, user2) => {
        return DIRECTION.ASCENDING === query.direction ?
            user1[query.sorting] > user2[query.sorting] ? 1 : -1 :
            user1[query.sorting] > user2[query.sorting] ? -1 : 1;
    });

    sortedFilteredUserList.forEach(user => {
        byId[user.id] = user;
        allIds.push(user.id);
    });
    return {byId, allIds};
};
