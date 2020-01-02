var mongoose = require("mongoose");
var request = require("request");
var StoriesFromApi = require("./db/models/story.js");
mongoose.connect("mongodb://localhost/hackednews");
// In this file, build out a worker that will populate the database
// with the data you need from the HackerNews API

// Here is an example of getting the top 500 stories from the API
// and logging them to the console.
// You are not required to use this code (though you may).
var topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json";

var isJSONResponse = function(headers) {
  return headers["content-type"].includes("json");
};

var getJSONFromHackerNews = function(url, callback) {
  request.get(url, function(err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error("Response did not contain JSON data."), null);
    } else {
      data = JSON.parse(body);

      callback(null, data);
    }
  });
};

getJSONFromHackerNews(topStoriesURL, function(err, data) {
  //console.log(err, "err, expect to be null");
  //console.log(data, "data, expect to be ids for top 500 stories");
  for (var i = 0; i < 10; i++) {
    StoriesFromApi.findOne(data[i], (err, stories) => {
      if (err) {
        getJSONFromHackerNews(
          `https://hacker-news.firebaseio.com/v0/item/
            ${data[i]}
            .json?print=pretty`,
          (err, story) => {
            if (!err) {
              StoriesFromApi.insertOne(story, err => {
                if (!err) {
                  console.log("story inserted");
                }
              });
            }
          }
        );
      }
    });
  }
});
