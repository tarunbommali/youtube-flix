import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const isMenuOpen  = useSelector(store => store.app.isMenuOpen) ; 
 
  if (!isMenuOpen) return null ; 
  return (
    <div className='text-lg px-3 shadow-lg  overflow-y-scroll h-[100vh] '>
        <ul>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-1 rounded-md'><Link to="/">Home</Link></li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Shorts</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Videos</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Live</li>
        </ul>
        <h1 className='font-bold pt-4'>Subscription</h1>    
        <ul>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Music</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Sports</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Gaming</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Movies</li>
        </ul>
        <h1 className='font-bold pt-4'>Watch Later</h1>    
        <ul>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Music</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Sports</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Gaming</li>
            <li className='hover:bg-[#272727] w-[100%] px-2 py-2 rounded-md'>Movies</li>
        </ul>
    </div>
  )
}

export default SideMenu