import React from "react";
import { Link } from "react-router-dom";
import useCountFormater from "../hooks/useCountFormater";
import useTimeAgo from "../hooks/useTimeAgo";
import { LuDot } from "react-icons/lu";


const VideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { title, publishedAt, channelTitle, thumbnails } = snippet;
  

  // Conditionally format the count only if statistics and likeCount are defined
  const count = statistics && statistics.likeCount !== undefined ? statistics.likeCount : 0;
  const countFormater = useCountFormater({ count });
  const published = useTimeAgo(publishedAt)
  console.log(countFormater)

  return (
    <Link to={`watch?v=${id}`} className="flex flex-col text-lg w-72 shadow-lg p-2 m-1 rounded-sm">
      <img
        src={thumbnails.medium.url}
        alt={title}
        width={thumbnails.medium.width}
        height={thumbnails.medium.height}
        className="rounded-lg"
      />

      <div className="flex flex-col">
        <h1 className="font-semibold text-[#f1f1f1]  whitespace-nowrap overflow-hidden text-ellipsis">{title}</h1>
        <h1 className="text-[#aaaaaa] hover:text-white text-md ">{channelTitle}</h1>
        <p className="flex items-center text-[#aaaaaa] text-md">{countFormater} views   {<LuDot/>}  {published}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
