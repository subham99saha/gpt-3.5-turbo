var express = require('express');
var app = express.Router();
var service = require('./service');

app.post('/chat', function (req, res) {
    let payload = req.body;
    service.chat(payload, function (response) {
        res.send(response);
    });
});

module.exports = app;