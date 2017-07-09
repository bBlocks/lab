var fs = require('fs');

var options = {
  key: fs.readFileSync('./node_modules/http2/example/localhost.key'),
  cert: fs.readFileSync('./node_modules/http2/example/localhost.crt')
};


require('http2').createServer(options, function(request, response) { 
  console.log('request');
  response.end('hello');
}).listen(3002);