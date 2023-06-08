import React from 'react'
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


const BottomNavbar = () => {
  return (
    <div className='block fixed bottom-0 w-full bg-white xl:hidden'>
        <div className='flex gap-6'>
            <div className=''>
              <VscHome size={30} />
            </div>
            <div className=''>
              <VscHome size={30} />
            </div>
            <div className=''>
              <VscHome size={30} />
            </div>
            <div className=''>
              <VscHome size={30} />
            </div>
            <div className=''>
              <VscHome size={30} />
            </div>
            <div className=''>
              <VscHome size={30} />
            </div>
            <div className=''>
              <VscHome size={30} />
            </div>
            <div className=''>
              <VscHome size={30} />
            </div>
        </div>
      
    </div>
  )
}

export default BottomNavbar
