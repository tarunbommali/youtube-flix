import React from 'react';

const video_suggestions = [
  "All", "Music", "Tamil Cinema", "Mixes", "Web Development", 
  "Node.js", "Action Movies", "Machine Learning", 
  "JavaScript Tutorials", "Node.js", "Action Movies", 
  "Machine Learning", "JavaScript Tutorials"
];

const ButtonList = () => {
  return (
    <div className='overflow-x-auto w-[98%]'>
      <ul className='flex justify-start items-center px-2 whitespace-nowrap my-1'>
        {video_suggestions.map((element, index) => (
          <li key={index}>
            <button className='bg-[#272727] text-[#f1f1f1] text-sm font-semibold rounded-lg py-1 px-2 mr-2 whitespace-nowrap'>
              {element}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonList;
