import React from 'react'
import { FaRegUser } from 'react-icons/fa'

const ChatMessage = ({name, text}) => {
  
  return (
    <div  className='px-4 py-2 flex items-center text-[16px]'>
      <FaRegUser className={` p-1  rounded-full mr-2 w-[28px] h-[28px]`}/>
        <div className='flex items-center'>
            <span className={`font-semibold mr-2 text-[#bfbfbf]`}>{name}</span>
            <span>{text}</span>
        </div>
        
    </div>
  )
}

export default ChatMessage