import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import ChannelDetails from "./ChannelDetails";
import LiveChat from "./LiveChat";


const WatchVideo = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className="p-2  mx-auto md:mx-[56px] rounded-md flex flex-col  ">
    <div className="flex flex-col w-[100%] md:flex-row w-fill   ">
      <iframe
        className="rounded-lg my-2 w-[100vw] md:w-[990px] h-[400px] md:h-[520px]"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <LiveChat/>
      </div>
      <div className="flex flex-col my-4 w-[1000px]">
        <ChannelDetails/>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchVideo;
