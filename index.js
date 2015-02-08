var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createServer({
  // replace with remote destination api server
  target:'http://0.0.0.0:8080'
});

proxy.on('proxyRes', function(proxyRes, req, res, options) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
});

proxy.listen(9000);
