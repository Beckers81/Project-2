var db = require("../models");
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
