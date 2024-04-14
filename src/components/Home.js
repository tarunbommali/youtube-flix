import React from 'react'
import SideMenu from './SideMenu'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex   bg-[#0f0f0f] text-white '>
        <div className='bg-[#0f0f0f] text-red-50 w-[250px]'><SideMenu/></div>
        <Outlet/>
    </div>
  )
}

export default Home
