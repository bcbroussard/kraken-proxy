var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createServer({
  // replace with remote destination api server
  target:'http://0.0.0.0:8080'
}).listen(9000);
