import React, { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineSearch } from 'react-icons/ai';

const Body = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='col-span-9 mt-5'>
      <div className='mb-4'>
        <ul
          className='flex text-[#4E516C] flex-wrap text-sm font-medium text-center gap-4'
          id='myTab'
          data-tabs-toggle='#myTabContent'
          role='tablist'
        >
          <li className='' role='presentation'>
            <button
              className={`p-2 px-4 border-1 rounded-lg ${
                activeTab === 'all' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F7F9FA]'
              }`}
              id='all-tab'
              data-tabs-target='#all'
              type='button'
              role='tab'
              aria-controls='all'
              aria-selected={activeTab === 'all' ? 'true' : 'false'}
              onClick={() => handleTabClick('all')}
            >
              All
            </button>
          </li>
          <li className='' role='presentation'>
            <button
              className={`p-2 px-4 rounded-lg ${
                activeTab === 'boats' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F7F9FA]'
              }`}
              id='boats-tab'
              data-tabs-target='#boats'
              type='button'
              role='tab'
              aria-controls='boats'
              aria-selected={activeTab === 'boats' ? 'true' : 'false'}
              onClick={() => handleTabClick('boats')}
            >
              Boats
            </button>
          </li>
          <li className='' role='presentation'>
            <button
              className={`p-2 px-4 border-1 rounded-lg ${
                activeTab === 'trucks' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F7F9FA]'
              }`}
              id='trucks-tab'
              data-tabs-target='#trucks'
              type='button'
              role='tab'
              aria-controls='trucks'
              aria-selected={activeTab === 'trucks' ? 'true' : 'false'}
              onClick={() => handleTabClick('trucks')}
            >
              Trucks
            </button>
          </li>
          <li role='presentation'>
            <button
              className={`p-2 px-4 border-1 rounded-lg ${
                activeTab === 'tackle' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F7F9FA]'
              }`}
              id='tackle-tab'
              data-tabs-target='#tackle'
              type='button'
              role='tab'
              aria-controls='tackle'
              aria-selected={activeTab === 'tackle' ? 'true' : 'false'}
              onClick={() => handleTabClick('tackle')}
            >
              Tackle
            </button>
          </li>
          <li role='presentation'>
            <button
              className={`p-2 px-4 border-1 rounded-lg ${
                activeTab === 'reels' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F7F9FA]'
              }`}
              id='reels-tab'
              data-tabs-target='#reels'
              type='button'
              role='tab'
              aria-controls='reels'
              aria-selected={activeTab === 'reels' ? 'true' : 'false'}
              onClick={() => handleTabClick('reels')}
            >
              Reels
            </button>
          </li>
          <li role='presentation'>
            <button
              className={`p-2 px-4 border-1 rounded-lg ${
                activeTab === 'rods' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F7F9FA]'
              }`}
              id='rods-tab'
              data-tabs-target='#rods'
              type='button'
              role='tab'
              aria-controls='rods'
              aria-selected={activeTab === 'rods' ? 'true' : 'false'}
              onClick={() => handleTabClick('rods')}
            >
              Rods
            </button>
          </li>
          <li role='presentation'>
            <button
              className={`p-2 px-4 border-1 rounded-lg ${
                activeTab === 'others' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F7F9FA]'
              }`}
              id='others-tab'
              data-tabs-target='#others'
              type='button'
              role='tab'
              aria-controls='others'
              aria-selected={activeTab === 'others' ? 'true' : 'false'}
              onClick={() => handleTabClick('others')}
            >
              Others
            </button>
          </li>
          <li className='' role='presentation'>
            <button className={`flex p-2 text-white px-4 border-1 rounded-lg ${activeTab === 'create' ? 'bg-[#0E2760] text-[#E5E8EE]' : 'bg-[#F43149]'}`}
             id='create-tab' data-tabs-target='#create' type='button' role='tab'
              aria-controls='create'
              aria-selected={activeTab === 'create' ? 'true' : 'false'}
             onClick={() => handleTabClick('create')}>
              <HiOutlineShoppingBag size={20} />
              &nbsp; Create Item
            </button>
          </li>

          <div className=''>
            <form action='' className='flex items-center'>
              <div className='relative'>
                <input
                  size={25}
                  type='text'
                  placeholder='Search By Classified...'
                  className='border border-gray-300 rounded-lg pl-4 pr-2 py-2 focus:outline-none bg-gray-100'
                />
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <AiOutlineSearch size={20} className='text-gray-400' />
                </div>
              </div>
            </form>
          </div>
        </ul>
      </div>
      <div className='mt-10' id='myTabContent'>
        <div
          className={`${
            activeTab === 'all' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='all'
          role='tabpanel'
          aria-labelledby='all-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Item Yet</strong>
          </p>
        </div>
        <div
          className={`${
            activeTab === 'boats' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='boats'
          role='tabpanel'
          aria-labelledby='boats-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Boats Yet</strong>
          </p>
        </div>
        <div
          className={`${
            activeTab === 'trucks' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='trucks'
          role='tabpanel'
          aria-labelledby='trucks-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Trucks Yet</strong>
          </p>
        </div>
        <div
          className={`${
            activeTab === 'tackle' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='tackle'
          role='tabpanel'
          aria-labelledby='tackle-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Tackles Yet</strong>
          </p>
        </div>
        <div
          className={`${
            activeTab === 'reels' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='reels'
          role='tabpanel'
          aria-labelledby='reels-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Reels Yet</strong>
          </p>
        </div>
        <div
          className={`${
            activeTab === 'rods' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='rods'
          role='tabpanel'
          aria-labelledby='rods-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Reels Yet</strong>
          </p>
        </div>
        <div
          className={`${
            activeTab === 'others' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='others'
          role='tabpanel'
          aria-labelledby='others-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Item Yet</strong>
          </p>
        </div>
        <div
          className={`${
            activeTab === 'create' ? '' : 'hidden'
          } flex items-center justify-center`}
          id='create'
          role='tabpanel'
          aria-labelledby='create-tab'
        >
          <p className='items-center justify-center'>
            <strong className='font-bold text-[#0E2760] items-center justify-center'>No Item Yet</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;

