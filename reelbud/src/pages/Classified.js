import React from 'react'
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import BottomNavbar from '../components/BottomNavbar'


const Classified = () => {
  return (
    <div className='mx-10 xl:mx-[120px] bg-white grid grid-cols-12 gap-10'>
      <Sidebar />
      <Body />
      <BottomNavbar />
    </div>
  )
}

export default Classified
