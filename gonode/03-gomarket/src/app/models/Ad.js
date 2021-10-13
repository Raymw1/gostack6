const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AdSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

AdSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Ad", AdSchema);
