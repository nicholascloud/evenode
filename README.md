# EVE Online API for node.js


## Usage ##

This is a work in progress.

To use the command line runner, create a `config.json` file in the module root directory with the following structure:

```json
{
  "keyID": 12345,
  "vCode": "abcdefghijklmnopqrstuvwxyz",
  "host": "api.eveonline.com",
}
```

The `keyID` and `vCode` fields will be generated when you create your [EVE API key](https://support.eveonline.com/api).

To execute API queries, issue commands at the prompt in the following form:

```
$ node cli.js [namespace]:[command] [arg1 arg2 argN...]
```

Some example commands to try:

- `$ node cli.js account:characters`
- `$ node cli.js character:accountBalance 98765` (use the character ID from the previous call)
- `$ node cli.js server:serverStatus`
- `$ node cli.js map:kills`

If an argument contains spaces it needs to be wrapped in quotation marks to be treated as a single argument (e.g., a character name: "Foo Bar").

## Comments ##

- The main file, `evenode.js`, is intended to be required by other programs. In consolidates the individual API modules in the `/api` directory.
- Right now I use the command line runner to manually test the API calls.
- I intend to add unit tests soon.
- A good portion of the EVE API calls are not yet implemented.
- API responses are buffered in memory before being returned. I intend to change the API to use streams instead in a future implementation.
- API responses are XML -- sorry, that's just the way CCP does it.
- There is presently no way to list all the APIs with the CLI runner. I intend to implement this in the future as well.

## Additional Resources ##

- [EVE API key](https://support.eveonline.com/api)
- [EVE Online API Reference](http://wiki.eve-id.net/APIv2_Page_Index)
- [EVE Online API Authentication](http://wiki.eve-id.net/API#Authentication)
- [EVEDev Network](http://wiki.eve-id.net/Main_Page)
- [EVE Online](http://www.eveonline.com/)
- #eve-dev on irc.coldfront.net:6667

