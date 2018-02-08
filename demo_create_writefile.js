var http = require('http');
var md = require('./myfirstmodule');
var fs = require('fs');
http.createServer(function (req, res) {

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
}).listen(md._port());