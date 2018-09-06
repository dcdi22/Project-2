module.exports = (app, passport) => {
  //   app.get("/dashboard", isLoggedIn, (req, res) => {
  //     res.render("dashboard");
  //   });

  app.get("/logout", (req, res) => {
    req.session.destroy(function(err) {
      console.log("HELLO CAN YOU REACH ME");
      res.redirect("/");
    });
  });

  // app.get("/logout", (req, res) => {
  //   req.session.destroy();
  //   console.log("HELLLLOOOOOOOOOOOOO88888");
  //   res.redirect("/");
  // });

  // app.get('/logout', function(req, res){
  //   req.logout();
  //   res.redirect('/');
  // });

  //   app.get("/signin", (req, res) => {
  //     res.render("signin");
  //   });

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/browse/styles/all",
      failureRedirect: "/"
    })
  );

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/new/account"
    })
  );

  //   app.get("/signup", (req, res) => {
  //     res.render("signup");
  //   });
};
