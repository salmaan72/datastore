const express = require('express');
const routes = require('./routes');
const database = require('./database');

const app = express();

app.use('/api', routes);

database.createDatabaseConnection();

const PORT = 8080;

app.listen(PORT, function() {
    console.log('Server listening on port '+PORT);
});
