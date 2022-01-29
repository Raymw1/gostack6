module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define(
    "Size",
    {
      title: DataTypes.STRING,
      value: DataTypes.FLOAT,
    },
    {
      hooks: {
        beforeDestroy: async (size) => {
          const file = await size.getFile();
          await file.destroy();
        },
      },
    }
  );

  Size.associate = (models) => {
    Size.belongsTo(models.Type, { foreignKey: "type_id" });
    Size.belongsTo(models.File, { foreignKey: "file_id" });
    Size.belongsToMany(models.Order, { through: "OrdersSizes" });
  };

  return Size;
};
