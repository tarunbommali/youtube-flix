import React from "react";
import Comment from "./Comment";
import { commentsData } from "../utils/commentsData";

const CommentsList = ({ commentsData }) => (
    <ul className="list-none">
      {commentsData.map((comment, index) => (
        <li key={index}>
          <Comment data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className="flex flex-col ml-8 pl-2 border-l border-white">
              <CommentsList commentsData={comment.replies} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );

const CommentsContainer = () => {
  return (
    <div className="flex flex-col bg-[#282828] py-2 px-4 font-semibold">
      <h1>Comments</h1>
      <CommentsList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
