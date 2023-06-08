import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar'


const Classified = () => {
  return (
    <div className='mx-10 xl:mx-[140px] bg-white grid grid-cols-12 gap-4'>
      <Sidebar />
      <Navbar />
      <BottomNavbar />
    </div>
  )
}

export default Classified
