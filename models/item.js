module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    brand: DataTypes.STRING,
    name: DataTypes.STRING,
    purchaseUrl: DataTypes.STRING,
    photoUrl: DataTypes.STRING,
    price: DataTypes.FLOAT(9, 2)
  });

  Item.associate = function(models) {
    Item.belongsTo(models.Post);
  };

  return Item;
};
