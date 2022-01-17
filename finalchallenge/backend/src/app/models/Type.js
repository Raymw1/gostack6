module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define("Type", {
    title: DataTypes.STRING,
  });

  Type.associate = (models) => {
    Type.belongsTo(models.Product, { foreignKey: "product_id" });
    Type.belongsTo(models.File, { foreignKey: "file_id" });
    Type.hasMany(models.Size);
  };

  return Type;
};
