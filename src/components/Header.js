import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { toggleMenu } from "../redux/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";
import { addCacheResult } from "../redux/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false)
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.cacheSearchResult);
  
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      
      if (searchCache[searchQuery]){
        setSearchSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestion();
      }
    }
    const timerId = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearInterval(timerId);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const response = await data.json();
      setSearchSuggestions(response[1]);
      dispatch(addCacheResult({ query: searchQuery, results: response[1] }));

      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchTextCondtion = searchSuggestions.length !== 0 ; 

  const searchCondtion = searchTextCondtion && showSuggestions

  return (
    <div className="grid grid-flow-col items-center shadow-lg p-3 m-0 w-[100%] sticky top-0 whitespace-pre-wrap  text-white z-50 bg-[#0f0f0f] text-3xl justify-between">
      <div className="flex col-span-1 items-center">
        <RxHamburgerMenu
          className="cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <h1 className="font-semibold mx-2 ">
            Youtube<span className="text-green-600 font-extrabold"> Flix</span>
          </h1>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center border-2 border-[#303030] bg-[#121212] text-white  rounded-full w-[500px] ">
          <input
            placeholder="Search"
            className="bg-[#121212] rounded-l-full text-white py-2  px-3 w-[90%] outline-none border-none text-lg "
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <IoSearch className="px-3 text-3xl w-[10%] py-2  h-auto rounded-r-full text-[#ffffff] bg-[#222222]" />
        </div>
        {searchCondtion && (
          <ul className="text-lg fixed pt-2 mt-12 bg-[#212121] rounded-lg w-[450px]">
            {searchSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="flex items-center hover:bg-[#3c3c3c] px-2 py-1 w-[100%] my-1"
              >
                <IoIosSearch className="mr-3" />
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-span-1">
        <FaRegUser />
      </div>
    </div>
  );
};

export default Header;
