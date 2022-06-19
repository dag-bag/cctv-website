import React from "react";
import Link from "next/link";
import { MdCall, MdMail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
export const TopNavbar = () => {
  return (
    <div className=" px-8 py-3 shadow-md flex-wrap">
      <div className="max-w-7xl m-auto flex sm:justify-between items-center flex-wrap justify-center space-y-2 sm:space-y-0">
        {/* First */}
        <div className="flex justify-center items-center space-x-3">
          <Link href={"tel:+919910122789"}>
            <button className="w-full px-4 py-2   md:text-base md:font-semibold text-center text-white transition duration-200 ease-in bg-purple-700 shadow-md text-xs hover:text-purple-700 hover:bg-white focus:outline-none focus:ring-2 flex justify-center items-center space-x-2 ">
              <MdCall className="text-lg" />
              <span className="w-full "> Call us: +91 8766203076</span>
            </button>
          </Link>
          <Link href={"mailto:virenderkumar23435@gmail.com"}>
            <button className="w-full px-4 py-4 md:py-2 md:text-base md:font-semibold text-xs text-center text-white transition duration-200 ease-in bg-purple-700 shadow-md hover:text-purple-700 hover:bg-white focus:outline-none focus:ring-2 flex justify-center items-center space-x-2">
              <MdMail className="text-lg" />
              <span className="w-full"> virenderkumar@gmail.com</span>
            </button>
          </Link>
        </div>
        {/* Second */}
        <div className="flex justify-center items-center space-x-3">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-purple-700 shadow-md hover:text-purple-700 hover:bg-white focus:outline-none focus:ring-2"
          >
            <span className="w-full">Get a quate</span>
          </button>{" "}
          <span className="text-gray-500 mx-2">|</span>
          <div className="flex justify-center items-center text-2xl space-x-3">
            <BsFacebook className="text-blue-500 cursor-pointer" />
            <Link href={"https://api.whatsapp.com/send?phone=8766203976"}>
              <a>
                <RiWhatsappFill className="text-green-500 cursor-pointer text-3xl" />
              </a>
            </Link>
            <Link href={"https://t.me/+91 8766203976"} target="_blank">
              <a>
                <FaTelegram className="text-blue-400 cursor-pointer" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
