module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    title: DataTypes.STRING,
    thumb: DataTypes.STRING,
    description: DataTypes.STRING,
    preparation_time: DataTypes.INTEGER,
  });

  Products.associate = (models) => {
    Products.hasMany(models.Types);
  };

  return Products;
};
