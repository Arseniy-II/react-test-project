export default {
    /**
     * Select user list
     *
     * @param {Object} state
     * @return {Object}
     */
    selectUserList({userList: state}) {
        return {
            userList: state.allIds.map(id => state.byId[id])
        };
    }
};
