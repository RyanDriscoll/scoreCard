const path = require('path');
const http = require('http');
const server = http.createServer();
const express = require('express');
const app = express();
const PORT = 8080;

server.listen(PORT, function () {
    console.log(`The server is listening on port ${PORT}!`);
});

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});
