var db = require("../models");
var isLoggedIn = require("../middleware/isLoggedIn");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", {
      user: req.user
    });
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
        posts: Posts,
        user: req.user
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
        posts: Posts,
        user: req.user
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
        user: req.user
      });
    });
  });

  app.get("/new/post", isLoggedIn, function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("newPost", {
        user: req.user
      });
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

  app.post("/new/item", function(req, res) {
    db.Item.create({
      brand: req.body.brandName,
      name: req.body.itemName,
      purchaseUrl: req.body.purchaseUrl,
      photoUrl: req.body.itemPhoto,
      price: req.body.itemPrice
    }).then(function(dbItem) {
      res.json(dbItem);
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

  // My Posts page
  app.get("/myposts/:userid", function(req, res) {
    db.Post.findAll({
      where: {
        userId: req.params.userid
      }
    }).then(function(Posts) {
      console.log(Posts);
      res.render("myposts", {
        posts: Posts
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {
      user: req.user
    });
  });
};
