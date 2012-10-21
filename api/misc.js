var endpoint = require('./api-endpoint');

var host = 'image.eveonline.com';

/**
 * MISC
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  //TODO: implement MISC API

  var api = {

    /**
     * Image
     * @param callback
     */
    image: function (callback) {
//      var path = '/api/calllist.xml.aspx';
//      var data = {};
//
//      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};