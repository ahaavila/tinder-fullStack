const express = require('express');

const routes = express.Router();

server.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}` });
});

server.post('/devs', (req, res) => {
    return res.json({ ok: true });
});

module.exports = routes;