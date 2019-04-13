db = require("../models/");

module.exports = function(app) {
  app.post("/api/school", function(req, res) {
    db.School.create(req.body).then(function(dbSchool) {
      res.json(dbSchool);
    });
  });
};
