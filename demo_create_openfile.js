var http = require('http');
var md = require('./myfirstmodule');
var fs = require('fs');
http.createServer(function (req, res) {

  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
  
}).listen(md._port());