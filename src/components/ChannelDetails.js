import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { HiDownload } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { BiSolidDislike } from "react-icons/bi";


const ChannelDetails = () => {
  return (
    <div className="flex justify-between items-center bg-[#0f0f0f] text-[#f1f1f1] py-2   my-4  font-semibold">
      {/* <div className="flex items-center mx-2">
        <img src="" alt="logo" />
        <div className="flex flex-col mx-2 px-6">
          <h1>channelName</h1>
          <p className="text-[#aaaaaa] text-sm">Subscribers</p>
        </div>
      </div> */}
      <div className="button flex items-center bg-[#272727] rounded-full px-4 py-2 mx-2 ">
          <button className="flex items-center ">
            <AiOutlineLike className="mx-2" />
            Like
          </button>
          <hr />
          <button className="items-center flex">
            <BiSolidDislike className="mx-2" />
            Dislike
          </button>
        </div>

      <div className="flex">
        <button className="button flex items-center bg-[#272727] rounded-full px-4 py-2 mx-2  hover:bg-[#444342]">
          <FaBell className="mx-2" />
          Subscribe
        </button>
        
        <button className="button flex items-center bg-[#272727] rounded-full px-4 py-2 mx-2 hover:bg-[#444342]">
          <IoIosShareAlt className="mx-2" />
          Share
        </button>
        <button className="button flex items-center bg-[#272727] rounded-full px-4 py-2 ml-2 hover:bg-[#444342]">
          <HiDownload className="mx-2" />
          Download
        </button>
      </div>
    </div>
  );
};

export default ChannelDetails;
