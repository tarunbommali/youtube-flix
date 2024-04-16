import React from "react";
import { FaRegUser } from "react-icons/fa";


const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center ml-3 my-3 text-[#f1f1f1]">
      <FaRegUser className="mr-4" />
      <div className="flex flex-col ">
        <h1> {name}</h1>
        <p> {text}</p>
      </div>
    </div>
  );
};

export default Comment;
