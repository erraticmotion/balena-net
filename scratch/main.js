//main.js

var express = require('express');
var app = express();

// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send("Hello balena-OS World on balenaOS on Pi4.");
});

//start a server on port 80 and log its start to our console
var server = app.listen(80, function () {
  var port = server.address().port;
  console.log("Node.js server running in a container and listening on port: ", port);
});