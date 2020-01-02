var data = require("./seed_data.js");
var dummyData = require("./react-client/dummy_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");

var seedDb = function(data) {
  // your code here!
  for (var i = 0; i < data.length; i++) {
    Stories.insertOne(
      {
        id: data[i].id,
        by: data[i].by.id,
        title: data[i].title,
        score: data[i].score
      },
      () => console.log("item added")
    );
  }
};

seedDb(data);
