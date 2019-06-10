var http = require('http');


http.createServer(function(req, res) {
  console.log(req);
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end("I'm gonna send back an embed with this info:");
}).listen(process.env.PORT || 5000);

console.log("Server started!");
