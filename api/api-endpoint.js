var https = require('https'),
  querystring = require('querystring');

function ApiEndpoint(host, path) {
  this.host = host;
  this.path = path;
}

ApiEndpoint.prototype.request = function(data, callback) {
  var self = this;

  var postData = querystring.stringify(data);

  var postOptions = {
    host: self.host,
    port: 443,
    path: self.path,
    method: 'POST',
    headers: {
      'Content-Length': postData.length,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  var req = https.request(postOptions, function (res) {
    var accumulated = [];

    res.on('data', function (apiData) {
      accumulated.push(apiData);
    });

    res.on('end', function () {
      callback(null, accumulated.join(''));
    });
  });

  req.on('error', function (error) {
    callback(error);
  });

  process.nextTick(function () {
    req.end(postData);
  });
};

module.exports = function (host, path) {
  return new ApiEndpoint(host, path);
};