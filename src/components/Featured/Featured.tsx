import React from 'react';
import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <div className='mb-20 px-4'>
      
      <h1 className='ml-4 md:ml-8 text-lg md:text-xl font-semibold'>Featured</h1>

     
      <div className='mr-4 ml-4 md:mr-8 md:ml-8 mt-6'>
        <img
          src="/images/pic.7.png"
          alt="Featured"
          className='w-full h-auto object-cover'
        />
      </div>

      
      <div className='text-center mt-10 px-4'>
        <h1 className='text-3xl md:text-5xl font-bold mb-5'>
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className='text-sm md:text-base'>
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <div>
          <Button className='rounded-full mt-10 text-white bg-black px-6 py-2 text-sm md:text-base'>
            Find Your Shoe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
