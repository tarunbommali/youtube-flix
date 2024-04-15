import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoIosBook, IoMdHome } from "react-icons/io";
import { SiYoutubeshorts,SiYoutubegaming } from "react-icons/si";
import { CiStreamOn } from "react-icons/ci";
import { MdMusicNote,MdWatchLater,MdSubscriptions ,MdOutlinePodcasts   } from "react-icons/md";
import { GiChampions,GiClothes  } from "react-icons/gi";
import { CgPlayList } from "react-icons/cg";
import { AiOutlineLike,AiOutlineShopping  } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { LuUserSquare ,LuHistory } from "react-icons/lu";
import { LiaYoutubeSquare } from "react-icons/lia";


const SideMenu = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="text-lg px-3 shadow-lg w-[220px]">
      <ul>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-1 rounded-md">
          <Link to="/" className="flex items-center">
            <IoMdHome className="mr-4" />
            Home
          </Link>
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <SiYoutubeshorts className="mr-4" /> Shorts
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <MdSubscriptions className="mr-4" />
          Subscriptions
        </li>
      </ul>

      <h1 className="font-bold pt-4 flex items-center">you</h1>

      <ul>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <LuUserSquare className="mr-4"  /> Your channel
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <LuHistory  className="mr-4" /> History
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <CgPlayList className="mr-4"  /> Playlists
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <LiaYoutubeSquare className="mr-4"  /> Your videos
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <MdWatchLater className="mr-4" /> Watch later
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <AiOutlineLike className="mr-4"  /> Liked videos
        </li>
      </ul>

      <h1 className="font-bold pt-4 flex items-center">Explore</h1>
      <ul>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <HiFire className="mr-4"  />
          Trending
        </li>

        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <CiStreamOn className="mr-4" /> Live
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <MdMusicNote className="mr-4" /> Music
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <SiYoutubegaming className="mr-4" /> Gaming
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <GiChampions className="mr-4" /> Sports
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <FaRegCirclePlay className="mr-4"  /> Movies
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <AiOutlineShopping className="mr-4"  /> Shopping
        </li>

        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
          <IoIosBook  className="mr-4" /> Courses
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
         
         <GiClothes className="mr-4" /> Fashion & Beauty
        </li>
        <li className="hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md flex items-center">
        <MdOutlinePodcasts className="mr-4" />  Podcasts
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
