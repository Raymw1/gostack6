module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define("Types", {
    title: DataTypes.STRING,
    thumb: DataTypes.STRING,
  });

  Types.associate = (models) => {
    Types.belongsTo(models.Products, { foreignKey: "product_id" });
    Types.hasMany(models.Sizes);
  };

  return Types;
};