import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex justify-center items-center  w-auto flex-col px-6">
      <ButtonList />
      <div className="overflow-y-auto">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
