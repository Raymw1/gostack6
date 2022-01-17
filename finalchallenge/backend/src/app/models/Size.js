module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("Size", {
    title: DataTypes.STRING,
    value: DataTypes.FLOAT,
  });

  Size.associate = (models) => {
    Size.belongsTo(models.Type, { foreignKey: "type_id" });
    Size.belongsTo(models.File, { foreignKey: "file_id" });
  };

  return Size;
};
