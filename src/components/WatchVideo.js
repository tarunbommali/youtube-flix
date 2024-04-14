import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <div className="p-2 rounded-md h-screen flex justify-center">
      <iframe
        className="rounded-lg"
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
