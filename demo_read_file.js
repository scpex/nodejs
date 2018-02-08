var http = require('http');
var md = require('./myfirstmodule');
var fs = require('fs');
var uc = require('upper-case');
http.createServer(function (req, res) {
  
    fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc(data));
    res.end();
  });

}).listen(md._port());