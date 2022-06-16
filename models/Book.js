"use strict";
var mongoose = require("mongoose");
var { Schema } = mongoose;
let BooktSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});
mongoose.models = {};
export default mongoose.model("Book", BooktSchema);
