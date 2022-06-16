// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Book from "../../models/Book";
const handler = async (req, res) => {
  let Bookings = await Book.find();

  res.status(200).json({ Bookings });
};
export default connectDb(handler);
