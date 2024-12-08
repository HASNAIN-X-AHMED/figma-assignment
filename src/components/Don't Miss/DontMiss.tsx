import React from 'react';
import { Button } from "@/components/ui/button";

const DontMiss = () => {
  return (
    <div className='mb-20 px-4'>

      <h1 className='text-lg md:text-xl font-semibold mb-4 text-center'>Don't Miss</h1>

    
      <div className='flex justify-center mb-8'>
        <img
          src='/images/pic.12.png'
          alt='Don’t Miss'
          className='w-full max-w-[1300px] h-auto object-cover'
        />
      </div>

      <div className='text-center mt-10'>
        <h1 className='text-3xl md:text-5xl font-semibold mb-6'>FLIGHT ESSENTIALS</h1>
        <h1 className='text-sm md:text-base max-w-[800px] mx-auto'>
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </h1>
        <Button className='rounded-full mt-10 text-white bg-black px-6 py-2 text-sm md:text-base'>
          Shop
        </Button>
      </div>
    </div>
  );
};

export default DontMiss;
