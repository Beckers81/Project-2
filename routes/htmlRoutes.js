module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(process.cwd() + "/public/home.html");
  });
  app.get("/Survey", function(req, res) {
    console.log(__dirname + "../public/html/survey.html");
    // res.sendFile(path.join(__dirname, "/public/html/Survey.html"));
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
