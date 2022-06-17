const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    msg: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
mongoose.models = {};
module.exports = mongoose.model("Order", orderSchema);
