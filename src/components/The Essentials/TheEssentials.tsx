import React from 'react';

const TheEssentials = () => {
  return (
    <div className='mt-20 px-4'>
      {/* Title Section */}
      <h1 className='text-lg md:text-xl font-semibold mb-6 ml-2 md:ml-4'>
        The Essentials
      </h1>

      {/* Image Section */}
      <div className='flex flex-wrap justify-around items-center gap-4 h-auto mb-12'>
        <img
          src="/images/pic.13.png"
          alt="Essential 1"
          className='w-full md:w-[30%] object-cover rounded-lg'
        />
        <img
          src="/images/pic.14.png"
          alt="Essential 2"
          className='w-full md:w-[30%] object-cover rounded-lg'
        />
        <img
          src="/images/pic.15.png"
          alt="Essential 3"
          className='w-full md:w-[30%] object-cover rounded-lg'
        />
      </div>

      {/* List Section */}
      <div className='flex flex-wrap justify-around gap-10'>
        <div className='w-full md:w-auto'>
          <ul className='space-y-2 text-center md:text-left'>
            <li className='font-semibold underline'>Icons</li>
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        <div className='w-full md:w-auto'>
          <ul className='space-y-2 text-center md:text-left'>
            <li className='font-semibold underline'>Shoes</li>
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        <div className='w-full md:w-auto'>
          <ul className='space-y-2 text-center md:text-left'>
            <li className='font-semibold underline'>Clothing</li>
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        <div className='w-full md:w-auto'>
          <ul className='space-y-2 text-center md:text-left'>
            <li className='font-semibold underline'>Kids'</li>
            <li>Infant & Toddler Shoes</li>
            <li>Kids' Shoes</li>
            <li>Kids' Jordan Shoes</li>
            <li>Kids' Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheEssentials;
