module.exports = (sequelize, DataTypes) => {
  const Sizes = sequelize.define("Sizes", {
    title: DataTypes.STRING,
    thumb: DataTypes.STRING,
    value: DataTypes.FLOAT,
  });

  Sizes.associate = (models) => {
    Sizes.belongsTo(models.Types);
  };

  return Sizes;
};
