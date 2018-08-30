var db = require("../models");

module.exports = function(app) {
  // Test POST request for creating a new Post
  app.post("/api/post", function(req, res) {
    db.Post.create(req.body)
      .catch(function(err) {
        console.log(err);
        res.end();
      })
      .then(function(dbExamples) {
        res.json(dbExamples);
      });
  });

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
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
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
