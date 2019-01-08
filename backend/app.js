const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3200;

// Routes
let usersRoutes = require('./routes/users');
let tailorsRoutes = require('./routes/tailors');
let requestsRoutes = require('./routes/requests');

app.get('/', (req, res) => res.json({
    'users': `https://www.urbanoutfitters.com/`
}));

// Dependencies
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/users', usersRoutes);
app.use('/tailors', tailorsRoutes);
app.use('/requests', requestsRoutes);

app.use(notFound);
app.use(errorHandler);


// Middleware/Error Handling
function notFound(err, req, res, next) {
    res.status(404).send({error: 'Not Found!', status: 404, url: req.originalURL})
};

function errorHandler(err, req, res, next) {
    console.error('Error', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

// Listening?
app.listen(port, () => console.log(`Your port is on ${port}`));