module.exports = (sequelize, DataTypes) => {
  const OrdersSizes = sequelize.define("OrdersSizes");

  OrdersSizes.associate = (models) => {
    // OrdersSizes.belongsTo(models.Order, { foreignKey: "order_id" });
    // OrdersSizes.belongsTo(models.Size, { foreignKey: "size_id" });
  };

  return OrdersSizes;
};
