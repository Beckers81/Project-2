var db = require("../models");
var path = require("path")

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
   res.sendFile(process.cwd() + "/public/home.html");
  }
  )};
