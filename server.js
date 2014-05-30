var server = require('http').createServer()
  , buffet = require('buffet')('./', {indexes: true});

server.on('request', function (req, res) {
  buffet(req, res, function () {
    buffet.notFound(req, res);
  });
});

server.listen(3000, function () {
  console.log('Server running on port 3000');
});