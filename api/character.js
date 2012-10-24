var endpoint = require('./api-endpoint');

/**
 * Character API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  //TODO: finish implementing Character API

  var api = {

    /**
     * AccountBalance
     * Returns the ISK balance of a character.
     * @see http://wiki.eve-id.net/APIv2_Char_AccountBalance_XML
     * @param characterID
     * @param callback
     */
    accountBalance: function (characterID, callback) {
      var path = '/char/AccountBalance.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * AssetList
     * Returns a list of assets owned by a character.
     * @see http://wiki.eve-id.net/APIv2_Char_AssetList_XML
     * @param characterID
     * @param callback
     */
    assetList: function (characterID, callback) {
      var path = '/char/AssetList.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * CalendarEventAttendees
     * Returns a list of all invited attendees for a given event.
     * NOTE: A call to char/UpcomingCalendarEvents.xml.aspx must be made prior to calling this API.
     * @see http://wiki.eve-id.net/APIv2_Char_CalendarEventAttendees_XML
     * @param characterID
     * @param eventIDs
     * @param callback
     */
    calendarEventAttendees: function (characterID, eventIDs, callback) {
      var path = '/char/CalendarEventAttendees.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        eventIDs: eventIDs
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * CharacterSheet
     * Returns attributes relating to a specific character.
     * @see http://wiki.eve-id.net/APIv2_Char_CharacterSheet_XML
     * @param characterID
     * @param callback
     */
    characterSheet: function (characterID, callback) {
      var path = '/char/CharacterSheet.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * ContactList
     * Returns the character's contact and watch lists, incl. agents and respective standings set by the character. Also includes that character's corporation and/or alliance contacts.
     * @see http://wiki.eve-id.net/APIv2_Char_ContactList_XML
     * @param characterID
     * @param callback
     */
    contactList: function (characterID, callback) {
      var path = '/char/ContactList.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * ContactNotifications
     * Lists the notifications received about having been added to someone's contact list.
     * @see http://wiki.eve-id.net/APIv2_Char_ContactNotifications_XML
     * @param characterID
     * @param callback
     */
    contactNotifications: function (characterID, callback) {
      var path = '/char/ContactNotifications.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },


    'removeThis':{}
  };

  return api;
};