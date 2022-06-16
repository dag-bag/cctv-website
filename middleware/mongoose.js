import mongoose, { mongo } from "mongoose";
require("dotenv").config();

// console.log(process.env.MONGO);
const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(
    "mongodb+srv://cctv:cctv@cluster0.grv6buj.mongodb.net/?retryWrites=true&w=majority"
  );
  return handler(req, res);
};
export default connectDb;
