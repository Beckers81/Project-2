// var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.bootcampsdb.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

// SURVEY PAGE

// var courses = require("../data/courses.js");
var courses = require("../data/courses.js");

module.exports = function(app) {
  // when the url is "/api/table" display the data in json format
  app.get("/api/courses", function(req, res) {
    res.json(courses);
  });

  app.post("/api/courses", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcourse = req.body;
    // compute best match from scores
    console.log(newcourse);
    var bestMatch = {};

    for (var i = 0; i < newcourse.scores.length; i++) {
      if (newcourse.scores[i] === "1 (Strongly Disagree)") {
        newcourse.scores[i] = 1;
      } else if (newcourse.scores[i] === "5 (Strongly Agree)") {
        newcourse.scores[i] = 5;
      } else {
        newcourse.scores[i] = parseInt(newcourse.scores[i]);
      }
    }
    // compare the scores of newcourse with the scores of each friend in the database and find the friend with the smallest difference when each set of scores is compared

    var bestMatchIndex = 0;
    //greatest score difference for a question is 4, therefore greatest difference is 4 times # of questions in survey
    var bestMatchDifference = 40;

    for (var i = 0; i < courses.length; i++) {
      var totalDifference = 0;

      for (var index = 0; index < courses[i].scores.length; index++) {
        var differenceOneScore = Math.abs(
          courses[i].scores[index] - newcourse.scores[index]
        );
        totalDifference += differenceOneScore;
      }

      // if the totalDifference in scores is less than the best match so far
      // save that index and difference
      if (totalDifference < bestMatchDifference) {
        bestMatchIndex = i;
        bestMatchDifference = totalDifference;
      }
    }

    // the best match index is used to get the best match data from the courses index
    bestMatch = courses[bestMatchIndex];

    // Put new friend from survey in "database" array
    courses.push(newcourse);

    // console.log({ bestMatch });

    // return the best match friend
    res.json(bestMatch);
  });
};
