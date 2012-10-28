var endpoint = require('./api-endpoint');

/**
 * Account API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  var api = {

    /**
     * AccountStatus
     * Returns basic account information including when the subscription lapses, total play time in minutes, total times logged on and date of account creation. In the case of game time code accounts it will also look for available offers of time codes.
     * @see http://wiki.eve-id.net/APIv2_Account_AccountStatus_XML
     * @param callback
     */
    accountStatus: function (callback) {
      var path = '/account/AccountStatus.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * APIKeyInfo
     * @param callback
     */
    apiKeyInfo: function (callback) {
      var path = '/account/APIKeyInfo.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Characters
     * @param callback
     */
    characters: function (callback) {
      var path = '/account/Characters.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode
      };

      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};