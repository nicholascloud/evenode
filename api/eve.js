'use strict';

var endpoint = require('./api-endpoint');

/**
 * EVE API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  //TODO: finish documenting EVE API

  var api = {

    allianceList: function (callback) {
      var path = '/eve/AllianceList.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    certificateTree: function (callback) {
      var path = '/eve/CertificateTree.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * @see http://wiki.eve-id.net/APIv2_Eve_CharacterID_XML
     * @param names Comma-separated list of character names to query
     * @param callback
     */
    characterID: function (names, callback) {
      var path = '/eve/CharacterID.xml.aspx';

      if (Array.isArray(names)) {
        names = names.join(',');
      }

      var data = {
        names: names
      };

      endpoint(config.host, path).request(data, callback);
    },

    characterInfo: function (characterID, callback) {
      var path = '/eve/CharacterInfo.xml.aspx';
      var data = {
        characterID: characterID,
        apiKey: config.apiKey
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * @see http://wiki.eve-id.net/APIv2_Eve_CharacterName_XML
     * @param ids Comma-separated list of ownerIDs (characterID, agentID, corporationID, allianceID, or factionID) and typeIDs to query
     * @param callback
     */
    characterName: function (ids, callback) {
      var path = '/eve/CharacterName.xml.aspx';

      if (Array.isArray(ids)) {
        ids = ids.join(',');
      }

      var data = {
        ids: ids
      };

      endpoint(config.host, path).request(data, callback);
    },

    conquerableStationList: function (callback) {
      var path = '/eve/ConquerableStationList.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    errorList: function (callback) {
      var path = '/eve/ErrorList.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    facWarStats: function (callback) {
      var path = '/eve/FacWarStats.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    facWarTopStats: function (callback) {
      var path = '/eve/FacWarTopStats.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of transaction types used in the Journal Entries
     * @param callback
     */
    refTypes: function (callback) {
      var path = '/eve/RefTypes.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * XML of currently in-game skills (including unpublished skills).
     * @see http://wiki.eve-id.net/APIv2_Eve_SkillTree_XML
     * @param callback
     */
    skillTree: function (callback) {
      var path = '/eve/SkillTree.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the name associated with a typeID.
     * @see http://wiki.eve-id.net/APIv2_Eve_TypeName_XML
     * @param ids Comma-separated list of typeIDs to query
     * @param callback
     */
    typeName: function (ids, callback) {
      var path = '/eve/TypeName.xml.aspx';

      if (Array.isArray(ids)) {
        ids = ids.join(',');
      }

      var data = {
        ids: ids
      };

      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};