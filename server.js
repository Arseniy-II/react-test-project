const
    express = require('express'),
    history = require('./server-redirect/index'),
    bodyParser = require('body-parser'),
    path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// return static files on request
const staticFileMiddleware = express.static(path.join(__dirname, 'public'));
app.use(staticFileMiddleware);
app.use(history({
    disableDotRule: true
}));
app.use(staticFileMiddleware);

// routes configuration
const peopleRoutes = require('./server-routes/people');
const i18nRoutes = require('./server-routes/i18n');

app.use('/api/people', peopleRoutes);
app.use('/api/i18n', i18nRoutes);

const port = 8081;
app.listen(port, () => {
    console.log(`Server is on ${port}`);
});
