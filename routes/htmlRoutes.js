var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  app.get("/browse/styles/all", function(req, res) {
    res.render("stylesFeed", {});
  });

  app.get("/browse/pieces/category/:category", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("piecesBrowseCategory", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/new/account", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("newAccount", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/new/post", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("newPost", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
