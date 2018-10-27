const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();

app.use(bodyParser.json());

app.get('/user/all', (req, res, next) => {
    pool.query('SELECT * FROM users', (q_err, q_res) => {
        if (q_err) return next(q_err);

        res.json(q_res.rows);
    })
});

app.post('/user/new', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.use((err, req, res, next) => {
    if (!err.statusCode) err.statusCode = 500;

    res.status(err.statusCode).json({
        type: 'error',
        msg: err.message,
    });
});

module.exports = app;
