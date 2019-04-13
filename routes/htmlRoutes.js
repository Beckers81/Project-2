var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
  });
<<<<<<< HEAD
  app.get("/Survey", function(req, res) {
    // console.log(__dirname + "../public/html/survey.html");
    res.sendFile(path.join(__dirname, "/public/html/Survey.html"));
=======
  app.get("/survey", function(req, res) {
    console.log(__dirname + "/public/survey.html");
    // res.sendFile(path.join(__dirname, "/public/html/Survey.html"));
>>>>>>> 8b45deb9ce0ba285fda7d0886b47101d8a2f79da
    res.sendFile(process.cwd() + "/public/survey.html");
    // res.sendFile("survey");
  });
  // Load example page and pass in an example by id

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    // res.render("404");
    res.send("404 Not Found");
  });
};

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // isAuthenticated middleware to this route
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
