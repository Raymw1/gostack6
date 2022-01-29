module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    observation: DataTypes.STRING,
    cep: DataTypes.NUMBER,
    street: DataTypes.STRING,
    number: DataTypes.NUMBER,
    neighborhood: DataTypes.STRING,
    value: DataTypes.NUMBER,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "user_id" });
    // Order.hasMany(models.OrdersSizes);
    Order.belongsToMany(models.Size, { through: "OrdersSizes" });
  };

  return Order;
};
