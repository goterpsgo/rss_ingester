parser = require("rss-parser"); // https://github.com/bobby-brennan/rss-parser
moment = require("moment");
fs = require("fs");
var this_dir = './rss';

if (!fs.existsSync(this_dir)) {
  fs.mkdirSync(this_dir);
}

var source = {
  name: "Asian Development Bank",
  prefix: "adb",  // mandatory, used for dump file name prefix
  url: "https://www.adb.org/projects/rss" // mandatory
}

parser.parseURL(source.url, function(err, parsed) {
  var filename = this_dir + '/' + moment().format('YYYYMMDD') + '_' + source.prefix + '.json'
  fs.writeFile(filename, JSON.stringify(parsed.feed), function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('Content saved to ' + filename);
  });
})
