const
    router = require('express').Router(),
    asyncResponse = require('./async-middleware').asyncResponse,
    asyncFileRead = require('./async-middleware').asyncFileRead;

router.get('/', asyncResponse(
    async (req, res) => {
        const {locale = 'en'} = req.query;
        const i18n = await asyncFileRead(`./data/i18n/${locale}.json`, 'utf8');
        res.send(i18n);
    })
);

module.exports = router;
