const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 1337;


app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

// error handling
app.use(function (err, req, res, next) {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(PORT, function () {
  console.log(`The server is listening on port ${PORT}!`);
});
