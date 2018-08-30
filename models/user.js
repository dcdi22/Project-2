module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING(15),
      validation: {
        len: [2, 15],
        isAlphanumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validation: {
        isEmail: true
      }
    }
  });
  return User;
};