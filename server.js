// server.js
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 80;

app.use('/', express.static('public')); // PRODUCTION!

app.listen(port);
console.log('The magic happens on port ' + port);
