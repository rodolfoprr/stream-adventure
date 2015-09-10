var split = require('split');
var through = require('through2');
var stream = through(write);

var quantidadeLinhas = 0;

function write (buffer, encoding, next) {
	var conteudoLinha = buffer.toString() + '\n';
	
	if(quantidadeLinhas % 2 !== 0) {
		this.push(conteudoLinha.toUpperCase());
	} else {
		this.push(conteudoLinha.toLowerCase());
	}
	
	quantidadeLinhas++;
	next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);