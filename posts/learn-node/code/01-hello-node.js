var http = require('http');

http
  .createServer(function (req, res) {
    console.log(req, res);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Node!');
  })
  .listen(8080);
