var endpoint = require('./api-endpoint');

/**
 * Character API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  //TODO: finish implementing Character API

  var api = {
    accountBalance: function (characterID, callback) {
      console.log(arguments);
      var path = '/char/AccountBalance.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    assetList: function (characterID, callback) {
      console.log(arguments);
      var path = '/char/AssetList.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    calendarEventAttendees: function (characterID, eventIDs, callback) {
      console.log(arguments);
      var path = '/char/CalendarEventAttendees.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        eventIDs: eventIDs
      };

      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};