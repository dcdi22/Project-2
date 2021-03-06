const bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
  const User = user;
  const LocalStrategy = require("passport-local").Strategy;

  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        const User = user;
        const isValidPassword = (userPass, pass) => bCrypt.compareSync(pass, userPass);

        User.findOne({
          where: {
            username: username
          }
        })
          .then(user => {
            if (!user) {
              return done(null, false, { message: "Username does not exist" });
            }
            if (!isValidPassword(user.password, password)) {
              return done(null, false, { message: "Incorrect Password" });
            }

            const userInfo = user.get();
            return done(null, userInfo);
          })
          .catch(err => {
            console.error(err);
            return done(null, false, { message: "Something went wrong" });
          });
      }
    )
  );

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      (req, username, password, done) => {
        const generateHash = pass => bCrypt.hashSync(pass, bCrypt.genSaltSync(8), null);

        User.findOne({
          where: {
            username: username
          }
        }).then(user => {
          if (user) {
            return done(null, false, { message: "That username is already taken" });
          }

          const userPassword = generateHash(password);
          const data = {
            email: req.body.email,
            password: userPassword,
            username: username
          };

          User.create(data).then((newUser, created) => {
            if (!newUser) {
              return done(null, false);
            }

            return done(null, newUser);
          });
        });
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user.id));

  passport.deserializeUser((id, done) =>
    User.findById(id).then(user => (user ? done(null, user.get()) : done(user.errors, null)))
  );
};
