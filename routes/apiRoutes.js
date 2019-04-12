db = require("../models/");
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.get("/api/bootcamps", function(req, res) {
    db.Bootcamp.findAll({}).then(function(dbSchool) {
      res.json(dbSchool);
    });
  });

  // Create a new example
  app.post("/api/bootcamps", function(req, res) {
    console.log(req.body);
    db.School.create(req.body).then(function(dbSchools) {
      res.json(dbSchools);
    });
  });

  // Delete an example by id
  app.delete("/api/bootcamps/:id", function(req, res) {
    db.School.destroy({ where: { id: req.params.id } }).then(function(
      dbSchool
    ) {
      res.json(dbSchool);
    });
  });
};

// SURVEY PAGE

// var courses = require("../data/courses.js");
var courses = require("../data/courses.js");

module.exports = function(app) {
  // when the url is "/api/table" display the data in json format
  app.get("/api/courses", function(_req, res) {
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

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/activeuser");
  });
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });
  // Logging out User
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
