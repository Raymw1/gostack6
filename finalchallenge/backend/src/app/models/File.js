module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define(
    "File",
    {
      originalname: DataTypes.STRING,
      key: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: async (file) => {
          if (!file.url) {
            file.url = `${process.env.APP_URL}/files/${file.key}`;
          }
        },
      },
    }
  );

  File.associate = (models) => {
    File.hasMany(models.Product);
    File.hasMany(models.Size);
    File.hasMany(models.Type);
  };

  return File;
};
