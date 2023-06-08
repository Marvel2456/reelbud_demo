import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdMail} from 'react-icons/md'
import {BsBellFill} from 'react-icons/bs'
import MainSection from './MainSection'

const Navbar = () => {
  return (
    <div className='col-span-9'>
      <div className='hidden xl:flex bg-white py-[23px] gap-6'>
        <div className='flex text-[#0e2760]'>
          <div className='text-3xl flex'>
            <p className=''>Reel</p><span className='font-black '>Buds</span>
          </div>
          <div className='font-semibold text-xl mt-2'>
            <p className=''>/Classifieds</p>
          </div> 
        </div>
        <div className=''>
          <form action="" className='flex items-center'>
            <div className='relative'>
              <input
                size={40}
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg pl-4 pr-2 py-2 focus:outline-none bg-gray-100"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <AiOutlineSearch size={20} className="text-gray-400" />
              </div>
            </div>
            
          </form>
          
        </div>
        <div className='flex items-center'>
          <a href='/'><MdMail size={30} className='' color='#6080a0' /></a>
        </div>
        <div className='flex items-center'>
          <a href='/'><BsBellFill size={28} className='' color='#6080a0' /></a>
        </div>
        <div>
          
        </div>
      </div>
      <hr className='hidden xl:block border-b border-gray-100' />  
    
    <MainSection />
    </div>
  )
}

export default Navbar
