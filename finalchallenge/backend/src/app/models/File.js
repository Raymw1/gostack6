module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define("File", {
    originalname: DataTypes.STRING,
    filename: DataTypes.STRING,
    url: DataTypes.STRING,
  });

  File.associate = (models) => {
    File.hasMany(models.Product);
    File.hasMany(models.Size);
    File.hasMany(models.Type);
  };

  return File;
};
