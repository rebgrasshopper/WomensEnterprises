const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');

const Router = require('./routes/route.js');

const PORT = process.env.PORT || 4001

const app = express()

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api', Router);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something is broken.')
})

app.use(function(req, res, next) {
    res.status(404).send("Sorry, we couldn't find that.")
})

app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
})