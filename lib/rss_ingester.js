var parser = require("rss-parser");
var moment = require("moment");
var _ = require("lodash");

Rss_ingester = function(source) {
  this.parser = require("rss-parser");

  this.source = ((_.isObject(source)) && (_.isString(source.url)) && (_.isString(source.prefix))) ? source : { name: "Reddit", prefix: "reddit", url: "https://www.reddit.com/.rss" };
  this.data = "";

  this.ingest_data = new Promise(function(resolve, reject) {
    // console.log(this);
    parser = require("rss-parser");
    // parser.parseURL(this.source.url, function(err, parsed) {
    //   console.log(parsed.feed);
    //   if (_.isString(parsed.feed)) {
    //     resolve(parsed.feed);
    //   }
    //   else {
    //     reject('Feed returns error!');
    //   }
    // });
  });

  // ingest data from 3rd party
  // this.ingest_data = function() {
  //   this.parser.parseURL(this.source.url, function(err, parsed) {
  //     this.data = parsed.feed;
  //     // console.log(this.data);
  //     // console.log('End ingest_data()');
  //     return this;
  //   });
  // }

  // return ingested data to calling method
  this.get_data = function() {
    console.log(this.data);
    return this.data;
  }

  // save ingested data to file
  this.dump_data = function() {
    console.log(moment().format('YYYYMMDD'))
    return this;
  }
}

module.exports = Rss_ingester;
