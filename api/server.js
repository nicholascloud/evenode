'use strict';

var endpoint = require('./api-endpoint');

/**
 * Server API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  var api = {

    /**
     * Returns current Tranquility status and number of players online.
     * @see http://wiki.eve-id.net/APIv2_Server_ServerStatus_XML
     * @param callback
     */
    serverStatus: function (callback) {
      var path = '/server/ServerStatus.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};