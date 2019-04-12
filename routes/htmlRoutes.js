var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(process.cwd() + "/public/home.html");
  });
};

module.exports = function(app) {
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/activeuser");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/activeuser");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // isAuthenticated middleware to this route
  app.get("/activeuser", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/activeuser.html"));
  });
};
