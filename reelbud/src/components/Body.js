import React from 'react'
import Navbar from './Navbar'
import MainSection from './MainSection'

const Body = () => {
  return (
    <div className='col-span-9'>
      <Navbar />
      <hr className='hidden xl:block border-b border-gray-100' />  
    
      <MainSection />
    </div>
  )
}

export default Body
