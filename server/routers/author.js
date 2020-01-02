var express = require("express");
var authorController = require("../../db/models/author.js");

var router = express.Router();

router.route("/").get(function(req, res) {
  // TODO: Replace this with stories you've retrieved from the database

  authorController.findAll((err, results) => {
    if (err) {
      console.error.bind(err);
    }
    if (!err) {
      var arr = [];

      for (var i = 0; i < 10; i++) {
        var obj = {};
        obj.name = results[i].name;
        obj.karma = results[i].karma;
        obj.about = results[i].about;
        arr.push(obj);
      }
      res.status(200).send(arr);
    }
  });
  // res.json([
  //   {
  //     author: "ocdtrekkie",
  //     title: "Switch – New Video Game System [video]",
  //     score: 536
  //   },
  //   {
  //     author: "mhb",
  //     title: "Video Games Are Changing the Way Soccer Is Played",
  //     score: 100
  //   }
  // ]);
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;
