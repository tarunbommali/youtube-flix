import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCard from "./VideoCard";
import ShimmerCard from "./ShimmerCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API_KEY);
      const response = await data.json();
      setVideos(response.items);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching videos:", error);
      setLoading(false); 
    }
  };

  // Render shimmer cards while loading
  if (loading) {
    return (
      <div className="h-[98%] mx-4">
        <ul className="flex flex-wrap">
          {[...Array(20)].map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </ul>
      </div>
    );
  }

  // Render actual video cards once data is loaded
  return (
    <div className="h-[100%]">
      <ul className="flex flex-wrap">
        {videos && videos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))}
      </ul>
    </div>
  );
};

export default VideoContainer;
