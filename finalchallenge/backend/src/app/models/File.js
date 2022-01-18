const aws = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const s3 = new aws.S3();

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
        beforeDestroy: async (file) => {
          if (process.env.STORAGE_TYPE === "s3") {
            return s3
              .deleteObject({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: file.key,
              })
              .promise();
          } else {
            return promisify(fs.unlink)(
              path.resolve(
                __dirname,
                "..",
                "..",
                "..",
                "tmp",
                "uploads",
                file.key
              )
            );
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
