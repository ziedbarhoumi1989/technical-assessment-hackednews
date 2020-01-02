var data = require("./seed_data.js");
var dummyData = require("./react-client/dummy_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");
var Authors = require("./db/models/author.js");
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
      () => console.log("story added")
    );

    Authors.insertOne(
      {
        id: data[i].id,
        name: data[i].by.id,
        karma: data[i].by.karma,
        about: data[i].by.about
      },
      () => console.log("author added")
    );
  }
};

seedDb(data);
