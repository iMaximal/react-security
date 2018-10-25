const express = require('express');
const pool = require('./db');

const app = express();

app.get('/user/all', (req, res, next) => {
    pool.query('SELECT * FROM users', (q_err, q_res) => {
        if (q_err) return next(q_err);

        res.json(q_res.rows);
    })
});

module.exports = app;
