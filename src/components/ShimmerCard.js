import React from "react";

const ShimmerCard = () => {
  return (
    <div className="flex flex-col w-72 h-[180px]  m-2 rounded-lg bg-gray-600">
      {/* Shimmer effect */}
      <div className="animate-pulse bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 rounded-lg w-full h-full"></div>
    </div>
  );
};

export default ShimmerCard;
