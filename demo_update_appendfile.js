var http = require('http');
var md = require('./myfirstmodule');
var fs = require('fs');
http.createServer(function (req, res) {

  fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  
}).listen(md._port());