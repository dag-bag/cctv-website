import Sidebar from "../../components/admin/Sidebar";
import React, { useEffect, useState } from "react";
import { AiFillMail, AiFillPhone, AiFillAccountBook } from "react-icons/ai";

export default function Bookings() {
  const [Bookings, setBookings] = useState();
  const getBookings = async () => {
    const resp = await fetch("/api/getbookings");
    const respData = await resp.json();
    setBookings(respData.Bookings);
    console.log(respData.Bookings);
  };
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div className="flex space-x-7">
      <Sidebar />
      {Bookings &&
        Bookings.map((book) => {
          return (
            <div
              className="grid grid-cols-3 grid-rows-3 gap-3"
              key={book.email}
            >
              <div className=" space-y-5  shadow-lg  rounded-xl w-full md:w-72 p-4 bg-white  relative overflow-hidden flex justify-center items-start flex-col">
                <h1 className="text-xl font-medium flex justify-center items-center space-x-3">
                  <AiFillAccountBook />{" "}
                  <span className="text-base">{book.name}</span>
                </h1>
                <h1 className="text-xl font-medium flex justify-center items-center space-x-3">
                  <AiFillMail /> <span className="text-base">{book.email}</span>
                </h1>
                <h1 className="text-xl font-medium flex justify-center items-center space-x-3">
                  <AiFillPhone />{" "}
                  <span className="text-base">{book.phone}</span>
                </h1>
              </div>
            </div>
          );
        })}
    </div>
  );
}
