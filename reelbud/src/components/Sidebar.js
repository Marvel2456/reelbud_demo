import React from 'react'
import Logo from './Logo'
import {VscHome} from 'react-icons/vsc'
import {BiUserCircle} from 'react-icons/bi'
import {IoSearchCircleOutline} from 'react-icons/io5'
import {RiRadio2Line} from 'react-icons/ri'
import {SlStar} from 'react-icons/sl'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {GiOldKing} from 'react-icons/gi'
import {HiOutlineTrophy} from 'react-icons/hi2'
import {GiHook} from 'react-icons/gi'
import {AiTwotoneStar} from 'react-icons/ai'
import {LuUserPlus} from 'react-icons/lu'


const Sidebar = () => {
  return (
    <aside className='col-span-3'>
        <div className='bg-white'>
            <header className='flex items-center justify-center py-5'>
              <Logo />
            </header>
            <hr className='border-b border-gray-100 mx-10' />

            <section className='mt-4'>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <VscHome size={30} />
                <span className='font-semibold'>Home</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <RiRadio2Line size={30} />
                <span className='font-semibold'>Media</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <BiUserCircle size={34} />
                <span className='font-semibold'>Profile</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <IoSearchCircleOutline size={32} />
                <span className='font-semibold'>Search</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <SlStar size={30} />
                <span className='font-semibold'>Events</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <HiOutlineShoppingBag size={30} />
                <span className='font-semibold'>Classifieds</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <GiOldKing size={30} />
                <span className='font-semibold'>Talk to a Pro</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <HiOutlineTrophy size={30} />
                <span className='font-semibold'>Tournament</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <GiHook size={30} />
                <span className='font-semibold'>Guide/Lodges</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <AiTwotoneStar size={30} />
                <span className='font-semibold'>Advanced Tiers</span>  
              </div>
              <div className='flex gap-3 items-center mx-10 p-2 py-3 rounded-lg text-gray-700'>
                <LuUserPlus size={30} />
                <span className='font-semibold'>Tournament Partner</span>  
              </div>
            </section>
        </div>
      
    </aside>
  )
}

export default Sidebar
