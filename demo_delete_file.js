var http = require('http');
var md = require('./myfirstmodule');
var fs = require('fs');
http.createServer(function (req, res) {

  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
  
}).listen(md._port());