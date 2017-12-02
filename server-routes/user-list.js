const
    router = require('express').Router(),
    asyncResponse = require('./async-middleware').asyncResponse,
    asyncFileRead = require('./async-middleware').asyncFileRead;

router.get('/', asyncResponse(
    async (req, res) => {
        const userList = await asyncFileRead(`./data/user-list/user-list.json`, 'utf8');
        res.send(userList);
    })
);

module.exports = router;
