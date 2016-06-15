var http = require('http');
var	fs = require('fs');
//var myModules = require('./modules');
//var express = require('express');
//var app = express();

var server = http.createServer();
server.on('requrest', function(req, res) {
	console.log(req.method);
    fs.readFile('./main.html', 'utf-8', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('not found!');
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});
server.listen(process.env.PORT);
console.log('server listening ...');
