var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.end('Oh, hell no Kitty!');
});

console.log('Server started at port 1337');
app.listen(1337);
