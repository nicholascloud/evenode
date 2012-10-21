var fs = require('fs'),
  path = require('path'),
  os = require('os'),
  evenode = require('./evenode');

if (process.argv.length < 3) {
  return usage();
}

var argv = process.argv.slice(2);

var cmd = argv[0];

if (cmd === 'help') {
  return usage();
}

var apiArgs = argv.slice(1);
apiArgs.push(function (err, data) {
  if (err) return console.error(err);
  console.log(data);
});

fs.readFile(path.join(__dirname, 'config.json'), function (err, content) {
  if (err) return console.error(err);

  var config = JSON.parse(content);

  var parts = cmd.split(':'),
    namespace = parts[0],
    method = parts[1];

  var func = evenode(config)[namespace][method];

  if (func.length > apiArgs.length) {
    return console.error('invalid number of arguments');
  }

  func.apply(null, apiArgs);
});

function usage() {
  console.log('Usage:', '`node cli.js [namespace]:[command] [arg1 arg2 argN...]`', os.EOL);
  console.log('Example:', '`node cli.js eve:allianceList`');
}
