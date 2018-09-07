var db = require("../models");
var isLoggedIn = require("../middleware/isLoggedIn");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  app.get("/browse/styles/all", function(req, res) {
    db.Post.findAll({
      order: db.sequelize.literal("createdAt DESC"),
      include: [
        {
          model: db.Item
        }
      ]
    }).then(function(Posts) {
      res.render("stylesFeed", {
        posts: Posts
      });
    });
  });

  app.get("/browse/style/:id", function(req, res) {
    db.Post.findAll({
      where: {
        id: req.params.id
      },
      order: db.sequelize.literal("createdAt DESC"),
      include: [
        {
          model: db.Item
        }
      ]
    }).then(function(Posts) {
      // res.json(Posts);
      res.render("styleSingle", {
        posts: Posts
      });
    });
  });

  app.get("/browse/pieces/category/:category", function(req, res) {
    db.Category.findAll({}).then(function(dbCategory) {
      res.json(dbCategory);
      // res.render("piecesBrowseCategory", {
      //   msg: "Welcome!",
      //   examples: dbExamples
      // });
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

  app.get("/new/post", isLoggedIn, function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("newPost", {});
    });
  });

  app.post("/new/post", function(req, res) {
    console.log("test");
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      photoUrl: req.body.photoUrl
    }).then(function(dbPost) {
      res.json(dbPost);
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
