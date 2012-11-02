'use strict';

var endpoint = require('./api-endpoint');

/**
 * API call list API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  var api = {

    /**
     * CallList
     * Returns the mask and groupings for calls under the new Customizable API Keys authentication method.
     * @see http://wiki.eve-id.net/APIv2_API_CallList_XML
     * @param callback
     */
    accountStatus: function (callback) {
      var path = '/api/calllist.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};