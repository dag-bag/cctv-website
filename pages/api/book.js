// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Book from "../../models/Book";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let user = await Book.findOne({ email: req.body.email });
    if (user) {
      console.log("Exist");
      return res
        .status(400)
        .json({ msg: "This bookings is already exist", success: false });
    }
    let newBook = new Book(req.body);
    await newBook.save();

    // let newBook = await new Book(req.body);
    // await newBook.save();
    res.status(200).json({
      success: "success",
      msg: req.body.name + " your appointment is booked successfully.",
    });
  } else {
    return res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);
