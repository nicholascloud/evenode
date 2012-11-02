'use strict';

var endpoint = require('./api-endpoint');

/**
 * Character API
 * @param config {keyID, vCode, host}
 * @return {Object}
 */
module.exports = function (config) {

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

    /**
     * Contracts
     * Lists the personal contracts for a character.
     * @see http://wiki.eve-id.net/APIv2_Char_Contracts_XML
     * @param characterID
     * @param contractID
     * @param callback
     */
    contracts: function (characterID, contractID, callback) {
      var path = '/char/Contracts.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        contractID: contractID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * ContractItems
     * Lists items that a specified contract contains.
     * @see http://wiki.eve-id.net/APIv2_Char_ContractItems_XML
     * @param characterID
     * @param contractID
     * @param callback
     */
    contractItems: function (characterID, contractID, callback) {
      var path = '/char/ContractItems.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        contractID: contractID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * ContractBids
     * Lists the latest bids that have been made to any recent auctions.
     * @see http://wiki.eve-id.net/APIv2_Char_ContractBids_XML
     * @param characterID
     * @param callback
     */
    contractBids: function (characterID, callback) {
      var path = '/char/ContractItems.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * FacWarStats
     * If the character is enlisted in Factional Warfare, this will return the faction the character is enlisted in,
     * the current rank and the highest rank the character ever had attained, and how many kills and victory points
     * the character obtained yesterday, in the last week, and total. Otherwise returns an error code.
     * @see http://wiki.eve-id.net/APIv2_Char_Factional_Warfare_Stats_XML
     * @param characterID
     * @param callback
     */
    facWarStats: function (characterID, callback) {
      var path = '/char/FacWarStats.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * IndustryJobs
     * @see http://wiki.eve-id.net/APIv2_Char_IndustryJobs_XML
     * @param characterID
     * @param jobScope ['char'|'corp']
     * @param callback
     */
    industryJobs: function (characterID, jobScope, callback) {
      if (['char', 'corp'].indexOf(jobScope) < 0) {
        return callback('invalid job scope specified');
      }

      var path = '/' + jobScope + '/FacWarStats.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * KillLog
     * Returns a list of kills where this character received the final blow and losses of this character.
     * @see http://wiki.eve-id.net/APIv2_Char_KillLog_XML
     * @param characterID
     * @param beforeKillID (optional)
     * @param callback
     */
    killLog: function (characterID, beforeKillID, callback) {
      if (arguments.length === 2) {
        callback = beforeKillID;
        beforeKillID = undefined;
      }

      var path = '/char/KillLog.xml.aspx';
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
     * Locations
     * Call will return the items name (or its type name if no user defined name exists) as well as their x,y,z
     * coordinates. Coordinates should all be 0 for valid locations located inside of stations.
     * @see http://wiki.eve-id.net/APIv2_Char_Locations_XML
     * @param characterID
     * @param {Array} itemIDs
     * @param callback
     */
    locations: function (characterID, itemIDs, callback) {
      var path = '/char/Locations.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        IDs: itemIDs.join(',')
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * MailBodies
     * Returns the bodies of headers that have already been fetched with the MailMessages call. It will also return
     * a list of missing IDs that could not be accessed. Bodies cannot be accessed if you have not called for
     * their headers recently.
     * @see http://wiki.eve-id.net/APIv2_Char_MailBodies_XML
     * @param characterID
     * @param {Array} messageIDs
     * @param callback
     */
    mailBodies: function (characterID, messageIDs, callback) {
      var path = '/char/MailBodies.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        IDs: messageIDs.join(',')
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * MailingLists
     * Returns an XML document listing all mailing lists the character is currently a member of.
     * @see http://wiki.eve-id.net/APIv2_Char_mailinglists_XML
     * @param characterID
     * @param callback
     */
    mailingLists: function (characterID, callback) {
      var path = '/char/mailinglists.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * MailMessages
     * Returns the message headers for mail.
     * @see http://wiki.eve-id.net/APIv2_Char_MailMessages_XML
     * @param characterID
     * @param callback
     */
    mailMessages: function (characterID, callback) {
      var path = '/char/MailMessages.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * MarketOrders
     * Returns a list of market orders for your character.
     * @see http://wiki.eve-id.net/APIv2_Char_MarketOrders_XML
     * @param characterID
     * @param orderID (optional) market order ID to fetch an order that is no longer open
     * @param callback
     */
    marketOrders: function (characterID, orderID, callback) {
      if (arguments.length === 2) {
        callback = orderID;
        orderID = null;
      }

      var path = '/char/MarketOrders.xml.aspx';
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
     * Medals
     * Returns a list of medals the character has.
     * @see http://wiki.eve-id.net/APIv2_Char_Medals_XML
     * @param characterID
     * @param callback
     */
    medals: function (characterID, callback) {
      var path = '/char/Medals.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Notifications
     * Returns the message headers for notifications.
     * @see http://wiki.eve-id.net/APIv2_Char_Notifications_XML
     * @param characterID
     * @param callback
     */
    notifications: function (characterID, callback) {
      var path = '/char/Notifications.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * NotificationTexts
     * Returns the message bodies for notifications. Headers need to be requested via /char/Notifications.xml.aspx first.
     * @see http://wiki.eve-id.net/APIv2_Char_NotificationTexts_XML
     * @param characterID
     * @param {Array} notificationIDs
     * @param callback
     */
    notificationTexts: function (characterID, notificationIDs, callback) {
      var path = '/char/NotificationTexts.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID,
        IDs: notificationIDs.join(',')
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Research
     * Returns information about agents character is doing research with.
     * @see http://wiki.eve-id.net/APIv2_Char_Research_XML
     * @param characterID
     * @param callback
     */
    research: function (characterID, callback) {
      var path = '/char/Research.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * SkillInTraining
     * Returns XML document of the skill the character is currently training.
     * @see http://wiki.eve-id.net/APIv2_Char_SkillInTraining_XML
     * @param characterID
     * @param callback
     */
    skillInTraining: function (characterID, callback) {
      var path = '/char/SkillInTraining.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * SkillQueue
     * Returns XML document containing the skill queue of the character.
     * @see http://wiki.eve-id.net/APIv2_Char_SkillQueue_XML
     * @param characterID
     * @param callback
     */
    skillQueue: function (characterID, callback) {
      var path = '/char/SkillQueue.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * Standings
     * Returns the standings towards a character from agents, NPC corporations and factions. Since Tyrannis no longer
     * provides standings towards characters or entities, use the Contact List API instead.
     * @param characterID
     * @param callback
     */
    standings: function (characterID, callback) {
      var path = '/char/Standings.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * UpcomingCalendarEvents
     * Returns a list of all upcomming calendar events for a given character.
     * @see http://wiki.eve-id.net/APIv2Char_UpcomingCalendarEvents_XML
     * @param characterID
     * @param callback
     */
    upcomingCalendarEvents: function (characterID, callback) {
      var path = '/char/UpcomingCalendarEvents.xml.aspx';
      var data = {
        keyID: config.keyID,
        vCode: config.vCode,
        characterID: characterID
      };

      endpoint(config.host, path).request(data, callback);
    },

    /**
     * WalletJournal
     * Returns a list of journal transactions for character.
     * @see http://wiki.eve-id.net/APIv2_Char_JournalEntries_XML
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

      var path = '/char/WalletJournal.xml.aspx';
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
     * WalletTransactions
     * Returns market transactions for a character.
     * @see http://wiki.eve-id.net/APIv2_Char_MarketTransactions_XML
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

      var path = '/char/WalletTransactions.xml.aspx';
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