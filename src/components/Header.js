import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [serachQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col items-center shadow-lg p-3 m-0 w-[100%] sticky top-0 whitespace-pre-wrap  text-white z-50 bg-[#0f0f0f] text-3xl justify-between">
      <div className="flex col-span-1 items-center">
        <RxHamburgerMenu
          className="cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <h1 className="font-semibold mx-2 ">
            Youtube<span className="text-green-600 font-extrabold"> Flix</span>
          </h1>
        </a>
      </div>
      <div className="flex items-center border-2 border-[#303030] bg-[#121212] text-white  rounded-full w-[500px] ">
        <input
          placeholder="Search"
          className="bg-[#121212] rounded-l-full text-white py-2  px-3 w-[90%] outline-none border-none text-lg "
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={serachQuery}
        />
        <IoSearch className="px-3 text-3xl w-[10%] py-2  h-auto rounded-r-full text-[#ffffff] bg-[#222222]" />
      </div>
      <div className="col-span-1">
        <FaRegUser />
      </div>
    </div>
  );
};

export default Header;
