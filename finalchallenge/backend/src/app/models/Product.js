module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    preparation_time: DataTypes.INTEGER,
  });

  Product.associate = (models) => {
    Product.hasMany(models.Type);
    Product.belongsTo(models.File, { foreign_key: "file_id" });
  };

  return Product;
};
