module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    brand: DataTypes.STRING,
    name: DataTypes.STRING,
    purchaseUrl: DataTypes.STRING,
    category: DataTypes.STRING,
    photoUrl: DataTypes.STRING
  });

  Item.associate = function(models) {
    Item.belongsTo(models.Post);
  };

  return Item;
};
