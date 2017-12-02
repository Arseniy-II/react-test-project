const
    router = require('express').Router(),

    asyncMiddleware = require('./async-middleware');

router.get('/', asyncMiddleware(
    async (req, res) => {
        const {locale} = req.query;
        const i18n = locale === 'ru' ? {title: 'привет'} : {title: 'hello'};

        // const jobHighlights = await JobModel.find(searchParams, ['name', 'src']);
        res.send(i18n);
    })
);

module.exports = router;
