import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../redux/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Dispatch action to add a new message
      dispatch(
        addMessages({
          name: generateRandomName(),
          text: generateRandomText(20),
        })
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch]); // Added dispatch as a dependency

  return (
    <div className="bg-[#0f0f0f] border border-[#3f3f3f] h-500 w-[400px] mx-4 my-2 rounded-lg">
      <div className="py-2 border-b border-[#3f3f3f] px-4"> Live chat</div>
      <div className="chat h-[420px] flex webki overflow-y-scroll flex-col-reverse">
        {chatMessage &&
          chatMessage.map((item, index) => (
            <ChatMessage key={index} name={item.name} text={item.text} />
          ))}
      </div>
      <div className="flex py-2 border-t border-[rgb(63,63,63)] px-4 mb-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (chatText !== "") {
              console.log("Chat text is not empty, dispatching action...");
              dispatch(
                addMessages({
                  name: "You",
                  text: chatText,
                })
              );
            }
            setChatText("");
          }}
          className="flex w-[100%] bg-[#272727]  rounded-full px-2"
        >
          <input
            type="text"
            className="w-[100%] bg-[#272727] px-2  py-1 outline-none rounded-full"
            placeholder="Chat..."
            onChange={(e) => setChatText(e.target.value)}
            value={chatText}
          />

          <button type="submit">
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
