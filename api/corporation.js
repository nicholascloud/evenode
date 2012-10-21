var endpoint = require('./api-endpoint');

/**
 * Corporation API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  //TODO: implement Corporation API

  var api = {

    /**
     * AccountBalance
     * @param characterID Character ID of a char with junior accountant or higher access in the corp you want the balances for.
     * @param callback
     */
    accountBalance: function (characterID, callback) {
      var path = '/corp/AccountBalance.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};