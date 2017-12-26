var rss_ingester = require("./lib/rss_ingester");

var source = {
  name: "Asian Development Bank",
  prefix: "adb",  // mandatory, used for dump file name prefix
  url: "https://www.adb.org/projects/rss" // mandatory
}

var this_ingester = new rss_ingester(source);
console.log(this_ingester.source);
this_ingester.ingest_data.then(function(response) {
  console.log(response);
}, function(error) {
  console.log(error);
});
// console.log(this_ingester);
// console.log(this_ingester.get_data());
// this_ingester.dump_data();
