'use strict';

var endpoint = require('./api-endpoint');

/**
 * EVE API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  var api = {

    /**
     * Returns a list of contestable solarsystems and the NPC faction currently occupying them. It should be noted that this file only returns a non-zero ID if the occupying faction is not the sovereign faction.
     * @see http://wiki.eve-id.net/APIv2_Factional_Warfare_Occupancy_XML
     * @param callback
     */
    facWarSystems: function (callback) {
      var path = '/map/FacWarSystems.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Note that only systems with jumps are shown, if the system has no jumps, it's not listed
     * @see http://wiki.eve-id.net/APIv2_Map_Jumps_XML
     * @param callback
     */
    jumps: function (callback) {
      var path = '/map/Jumps.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the number of kills in solarsystems within the last hour. Only solar system where kills have been made are listed, so assume zero in case the system is not listed.
     * @see http://wiki.eve-id.net/APIv2_Map_Kills_XML
     * @param callback
     */
    kills: function (callback) {
      var path = '/map/Kills.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of solarsystems and what faction or alliance controls them.
     * @see http://wiki.eve-id.net/APIv2_Map_Sovereignty_XML
     * @param callback
     */
    sovereignty: function (callback) {
      var path = '/map/Sovereignty.xml.aspx';
      var data = {};

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of all sovereignty structures in EVE.
     * @see http://wiki.eve-id.net/APIv2_Map_Sovereignty_Status_XML
     * @param callback
     */
    sovereigntyStatus: function (callback) {
      return callback('This API has been temporarily removed by CCP. http://www.eveonline.com/ingameboard.asp?a=topic&threadID=1228297');

      //var path = '/map/SovereigntyStatus.xml.aspx';
      //var data = {};

      //endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};