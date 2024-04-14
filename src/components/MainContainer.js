import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex justify-center items-center w-auto   flex-col overflow-y-scroll px-6    '>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer