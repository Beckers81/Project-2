db = require("../models/");
module.exports = function(app) {
  // Get all examples
  app.get("/api/bootcamps", function(req, res) {
    db.Scgool.findAll({}).then(function(dbSchool) {
      res.json(dbSchool);
    });
  });

  // Create a new example
  app.post("/api/bootcamps", function(req, res) {
    console.log(req.body);
    db.School.create(req.body).then(function(dbSchool) {
      res.json(dbSchool);
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
