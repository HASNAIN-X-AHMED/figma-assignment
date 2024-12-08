import React from 'react';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Bestofair = () => {
  return (
    <div className='mb-20 px-4'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-lg md:text-xl font-semibold ml-2'>Best of Air Max</h1>
        <ul className='flex gap-2 items-center'>
          <li className='text-sm md:text-base font-semibold'>Shop</li>
          <li>
            <CiCircleChevLeft className='text-lg md:text-xl cursor-pointer' />
          </li>
          <li>
            <CiCircleChevRight className='text-lg md:text-xl cursor-pointer' />
          </li>
        </ul>
      </div>

      {/* Product Section */}
      <div className='flex flex-wrap gap-6 justify-between'>
        {/* Product Card 1 */}
        <div className='w-full md:w-[30%] flex flex-col items-center'>
          <img
            src="/images/pic.4.png"
            alt="Nike Air Max Pulse"
            className='w-full h-auto object-cover mb-4'
          />
          <div className='w-full flex justify-between items-center'>
            <div>
              <p className='font-semibold'>Nike Air Max Pulse</p>
              <p className='text-sm'>Women's Shoes</p>
            </div>
            <div>
              <h1 className='font-semibold'>₹ 13 995</h1>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className='w-full md:w-[30%] flex flex-col items-center'>
          <img
            src="/images/pic.4.png"
            alt="Nike Air Max Pulse"
            className='w-full h-auto object-cover mb-4'
          />
          <div className='w-full flex justify-between items-center'>
            <div>
              <p className='font-semibold'>Nike Air Max Pulse</p>
              <p className='text-sm'>Men's Shoes</p>
            </div>
            <div>
              <h1 className='font-semibold'>₹ 13 995</h1>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className='w-full md:w-[30%] flex flex-col items-center'>
          <img
            src="/images/pic.4.png"
            alt="Nike Air Max 97 SE"
            className='w-full h-auto object-cover mb-4'
          />
          <div className='w-full flex justify-between items-center'>
            <div>
              <p className='font-semibold'>Nike Air Max 97 SE</p>
              <p className='text-sm'>Women's Shoes</p>
            </div>
            <div>
              <h1 className='font-semibold'>₹ 16 995</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestofair;
