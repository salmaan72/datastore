const express = require('express');
const routes = require('./routes');
const database = require('./database');

const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', routes);

database.createDatabaseConnection();

const PORT = 8080;

app.listen(PORT, function() {
    console.log('Server listening on port '+PORT);
});
