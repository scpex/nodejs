var http = require('http');
var url = require('url');
var md=require('./myfirstmodule');
var mysql = require('mysql');

var sql = 'select * from mysql.user;';
var rs;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result[0]));
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        res.write(JSON.stringify(result[0]));
        res.end(txt);
      }).listen(md._port());
  });
});

