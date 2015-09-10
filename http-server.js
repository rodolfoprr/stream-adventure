var http = require('http');
var through = require('through2');
var port = +process.argv[2];

var server = http.createServer(function (req, res) {
		if (req.method === 'POST') {
				req.pipe(through(function (buffer, encoding, next) {
						this.push(buffer.toString().toUpperCase());
						next();
				})).pipe(res);
		}
		else res.end('send me a POST\n');
});

server.listen(port);