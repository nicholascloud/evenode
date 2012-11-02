'use strict';

var endpoint = require('./api-endpoint');

/**
 * Corporation API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

  var api = {

    /**
     * Returns the ISK balance of a corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_AccountBalance_XML
     * @param characterID
     * @param callback
     */
    accountBalance: function (characterID, callback) {
      var path = '/corp/AccountBalance.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * @see http://wiki.eve-id.net/APIv2_Corp_AssetList_XML
     * @param characterID
     * @param callback
     */
    assetList: function (characterID, callback) {
      var path = '/corp/AssetList.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the corporation and the alliance contact lists.
     * @see http://wiki.eve-id.net/APIv2_Corp_ContactList_XML
     * @param characterID
     * @param callback
     */
    contactList: function (characterID, callback) {
      var path = '/corp/ContactList.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Shows corp container audit log.
     * @see http://wiki.eve-id.net/APIv2_Corp_ContainerLog_XML
     * @param characterID
     * @param callback
     */
    containerLog: function (characterID, callback) {
      var path = '/corp/ContainerLog.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Lists contracts issued within the last month as well as all contracts marked as outstanding or in-progress.
     * @see http://wiki.eve-id.net/APIv3_Corp_Contracts_XML
     * @param characterID
     * @param contractID
     * @param callback
     */
    contracts: function (characterID, contractID, callback) {
      var path = '/corp/Contracts.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        contractID: contractID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Lists items that a specified contract contains, use the contractID parameter to specify the contract.
     * @see http://wiki.eve-id.net/APIv2_Corp_ContractItems_XML
     * @param characterID
     * @param contractID
     * @param callback
     */
    contractItems: function (characterID, contractID, callback) {
      var path = '/corp/ContractItems.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        contractID: contractID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Lists the latest bids that have been made to any recent auctions.
     * @see http://wiki.eve-id.net/APIv2_Char_ContractBids_XML
     * @param characterID
     * @param callback
     */
    contractBids: function (characterID, callback) {
      var path = '/corp/ContractBids.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns attributes relating to a specific corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_CorporationSheet_XML
     * @param characterID
     * @param corporationID (optional) for a limited view
     * @param callback
     */
    corporationSheet: function (characterID, corporationID, callback) {
      if (arguments.length === 2) {
        callback = corporationID;
        corporationID = undefined;
      }

      var path = '/corp/CorporationSheet.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      if (corporationID) {
        data.corporationID = corporationID;
      }

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * If the corporation is enlisted in Factional Warfare, this will return the faction the corporation is enlisted
     * in, the current rank and the highest rank the corporation ever had attained, and how many kills and victory
     * points the corporation obtained yesterday, in the last week, and total. Otherwise returns an error code (125).
     * @see http://wiki.eve-id.net/APIv2_Corp_Factional_Warfare_Stats_XML
     * @param characterID
     * @param callback
     */
    facWarStats: function (characterID, callback) {
      var path = '/corp/FacWarStats.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the corporation industry jobs.
     * @see http://wiki.eve-id.net/APIv2_Corp_IndustryJobs_XML
     * @param characterID
     * @param callback
     */
    industryJobs: function (characterID, callback) {
      var path = '/corp/IndustryJobs.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * For corporations, this method requires the character to be a Director or CEO of the corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_KillLog_XML
     * @param characterID
     * @param beforeKillID (optional)
     * @param callback
     */
    killLog: function (characterID, beforeKillID, callback) {
      if (arguments.length === 2) {
        callback = beforeKillID;
        beforeKillID = undefined;
      }

      var path = '/corp/KillLog.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      if (beforeKillID) {
        data.beforeKillID = beforeKillID;
      }

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Call will return the items name (or its type name if no user defined name exists) as well as their x,y,z
     * coordinates. Coordinates should all be 0 for valid locations located inside of stations.
     * @see http://wiki.eve-id.net/APIv2_Corp_Locations_XML
     * @param characterID
     * @param {Array} itemIDs
     * @param callback
     */
    locations: function (characterID, itemIDs, callback) {
      var path = '/corp/Locations.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        IDs: itemIDs.join(',')
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of market orders that are either not expired or have expired in the past week (at most).
     * @see http://wiki.eve-id.net/APIv2_Corp_MarketOrders_XML
     * @param characterID
     * @param orderID (optional) market order ID to fetch an order that is no longer open
     * @param callback
     */
    marketOrders: function (characterID, orderID, callback) {
      if (arguments.length === 2) {
        callback = orderID;
        orderID = null;
      }

      var path = '/corp/MarketOrders.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      if (orderID) {
        data.orderID = orderID;
      }

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of medals created by this corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_Medals_XML
     * @param characterID
     * @param callback
     */
    medals: function (characterID, callback) {
      var path = '/corp/Medals.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of medals issued to members.
     * @see http://wiki.eve-id.net/APIv2_Corp_MemberMedals_XML
     * @param characterID
     * @param callback
     */
    memberMedals: function (characterID, callback) {
      var path = '/corp/MemberMedals.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the security roles of members in a corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_MemberSecurity_XML
     * @param characterID
     * @param callback
     */
    memberSecurity: function (characterID, callback) {
      var path = '/corp/MemberSecurity.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns info about corporation role changes for members and who did it.
     * @see http://wiki.eve-id.net/APIv2_Corp_MemberSecurityLog_XML
     * @param characterID
     * @param callback
     */
    memberSecurityLog: function (characterID, callback) {
      var path = '/corp/MemberSecurityLog.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * For player corps this returns the member list (same as in game). Otherwise returns an error code (207).
     * @see http://wiki.eve-id.net/APIv2_Corp_MemberTracking_XML
     * @param characterID
     * @param {Boolean} extended (optional) for extended version
     * @param callback
     */
    memberTracking: function (characterID, extended, callback) {
      if (arguments.length === 2) {
        callback = extended;
        extended = undefined;
      }

      var path = '/corp/MemberTracking.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode
      };

      if (extended) {
        data.extended = 1;
      }

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * This new Outpost API will allow you to pull information about the corporation’s outposts, which will require a
     * full API key from the a director(or CEO) of the corporation which the outpost belongs to.
     * @see http://wiki.eve-id.net/APIv2_Corp_OutpostList_XML
     * @param characterID
     * @param callback
     */
    outpostList: function (characterID, callback) {
      var path = '/corp/OutpostList.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * This new Outpost API will allow you to pull information about the corporation’s outposts, which will require a
     * full API key from the a director(or CEO) of the corporation which the outpost belongs to.
     * @see http://wiki.eve-id.net/APIv2_Corp_OutpostServiceDetail_XML
     * @param characterID
     * @param itemID of the outpost
     * @param callback
     */
    outpostServiceDetail: function (characterID, itemID, callback) {
      var path = '/corp/OutpostServiceDetail.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        itemID: itemID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the character and corporation share holders of a corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_Shareholders_XML
     * @param characterID
     * @param callback
     */
    shareholders: function (characterID, callback) {
      var path = '/corp/Shareholders.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the standings from NPC corporations and factions as well as agents. Since Tyrannis no longer provides
     * standings towards characters or entities, use the Contact List API instead.
     * @param characterID
     * @param callback
     */
    standings: function (characterID, callback) {
      var path = '/corp/Standings.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Shows the settings and fuel status of a POS.
     * @see http://wiki.eve-id.net/APIv2_Corp_StarbaseDetail_XML
     * @param characterID
     * @param itemID of the POS
     * @param callback
     */
    starbaseDetail: function (characterID, itemID, callback) {
      var path = '/corp/StarbaseDetail.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        itemID: itemID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Shows the list and states of POS'es.
     * @see http://wiki.eve-id.net/APIv2_Corp_StarbaseList_XML
     * @param callback
     */
    starbaseList: function (callback) {
      var path = '/corp/StarbaseList.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns the titles of a corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_CorporationTitles_XML
     * @param characterID
     * @param callback
     */
    titles: function (characterID, callback) {
      var path = '/corp/Titles.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of journal transactions for corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_JournalEntries_XML
     * @param characterID
     * @param accountKey (optional)
     * @param fromID (optional)
     * @param rowCount (optional)
     * @param callback
     */
    walletJournal: function (characterID, accountKey, fromID, rowCount, callback) {
      if (arguments.length === 2) {
        callback = accountKey;
        accountKey = undefined;
      }

      if (arguments.length === 3) {
        callback = fromID;
        fromID = undefined;
      }

      if (arguments.length === 4) {
        callback = rowCount;
        rowCount = undefined;
      }

      var path = '/corp/WalletJournal.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      if (accountKey) {
        data.accountKey = accountKey;
      }

      if (fromID) {
        data.fromID = fromID;
      }

      if (rowCount) {
        data.rowCount = rowCount;
      }

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Returns a list of market transactions for a corporation.
     * @see http://wiki.eve-id.net/APIv2_Corp_MarketTransactions_XML
     * @param characterID
     * @param accountKey (optional)
     * @param fromID (optional)
     * @param rowCount (optional)
     * @param callback
     */
    walletTransactions: function (characterID, accountKey, fromID, rowCount, callback) {
      if (arguments.length === 2) {
        callback = accountKey;
        accountKey = undefined;
      }

      if (arguments.length === 3) {
        callback = fromID;
        fromID = undefined;
      }

      if (arguments.length === 4) {
        callback = rowCount;
        rowCount = undefined;
      }

      var path = '/corp/WalletTransactions.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      if (accountKey) {
        data.accountKey = accountKey;
      }

      if (fromID) {
        data.fromID = fromID;
      }

      if (rowCount) {
        data.rowCount = rowCount;
      }

      endpoint(config.host, path).request(data, callback);
    }
  };

  return api;
};