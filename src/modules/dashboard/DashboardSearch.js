import { Button } from 'components/button';
import { CloseIcon } from 'icons';
import React from 'react';

const DashboardSearch = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
          />
        </div>
        <button className="w-[72px] rounded-full bg-primary text-white h-10 flex items-center justify-center flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* <div className='resultSearch rounded-[20px] bg-white absolute flex flex-col justify-center  left-0 w-[843px] max-h[700px] top-[55px] lg:top-[72px] px-[25px]'>
        <div className='flex justify-between  items-center p-[10px] mb-5'>
          <span className='text-sm font-medium text-center underline text-text1'>See all 10,124 fundraisier</span>
          <Button className='w-[42px] bg-redSoft'><CloseIcon></CloseIcon></Button>
        </div>
        <div className='flex flex-col gap-4 mb-6'>
          <ResultSearch></ResultSearch>
          <ResultSearch></ResultSearch>
          <ResultSearch></ResultSearch>
          <ResultSearch></ResultSearch>
        </div>
        <div className='flex flex-col gap-4 pb-6 mt-auto'>
          <p className='text-sm font-semibold text-text1'>Releted searchs</p>
          <p className='text-sm font-semibold text-text2'>Releted searchs</p>
          <p className='text-sm font-semibold text-text2'>Releted searchs</p>
          <p className='text-sm font-semibold text-text1'>Releted searchs</p>
        </div>
      </div> */}
    </div>
  );
};
const ResultSearch = () => {
  return (
    <div className='flex items-center gap-5'>
      <div className='w-[50px] h-[50px]'>
        <img
          src='https://hrchannels.com/uptalent/attachments/images/20220523/091644444_chuc-danh-ceo-la-gi.jpg'
          alt='Avatar'
          className='flex-shrink-0 object-cover w-full h-full rounded-[10px]'
        />
      </div>
      <div>
        <p className='text-sm font-normal text-text2'><strong className=''>Education</strong> fund for Durgham Family</p>
        <span className='text-xs font-normal text-text4'>By Rakesh Mahmud</span>
      </div>
    </div>
  )
}
export default DashboardSearch;