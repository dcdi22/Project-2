module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    photoUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    }
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User);
    Post.hasMany(models.Item);
  };

  return Post;
};
