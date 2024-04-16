import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import ChannelDetails from "./ChannelDetails";


const WatchVideo = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className="p-2  mx-auto md:mx-[56px] rounded-md flex flex-col w-[1000px] ">
      <iframe
        className="rounded-lg my-2"
        width="990"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col my-4">
        <ChannelDetails/>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchVideo;
