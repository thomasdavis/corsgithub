// web.js
var express = require("express");
var cors = require('cors');
var logfmt = require("logfmt");
var app = express();
var request = require("superagent");
app.use(logfmt.requestLogger());
app.use(cors);
app.get('*', function(req, res) {
  request
  .get('https://raw.githubusercontent.com' +req.url)
  .end(function(error, result){
    res.send(result.text);
  });
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
