import React from 'react';
const Top = () => {
  return (
    <div className='flex flex-wrap justify-between bg-[#F5F5F5] h-auto md:h-12 mb-4 items-center'>
      
      <div className='pl-4 md:pl-12 flex-shrink-0'>
        <img
          src="/images/pic.1.png"
          alt="image"
          className="h-12 md:h-[70px] w-auto"
        />
      </div>

      
      <div className='pr-4 md:pr-12'>
        <ul className='flex flex-wrap justify-center md:justify-end gap-2 md:gap-4 text-sm md:text-base font-semibold'>
          <li>Find a Store</li>
          <li>|</li>
          <li>Help</li>
          <li>|</li>
          <li>Join Us</li>
          <li>|</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
