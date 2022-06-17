// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Book from "../../models/Book";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let book = await Book.findOne({ email: req.body.email });
    let phone = await Book.findOne({ phone: req.body.phone });

    if (book || phone) {
      console.log("Exist");
      return res
        .status(400)
        .json({ msg: "This bookings is already exist", success: false });
    }
    if (!book || !phone) {
      let newBook = new Book(req.body);
      await newBook.save();

      // let newBook = await new Book(req.body);
      // await newBook.save();
      return res.status(200).json({
        success: "success",
        msg: req.body.name + " your appointment is booked successfully.",
      });
    }
  } else {
    return res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
