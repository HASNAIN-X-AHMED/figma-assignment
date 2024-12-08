import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className='mb-20'>
      <div className='bg-[#F5F5F5] h-auto md:h-16 mt-2 px-4 py-4'>
        <h1 className='text-center font-semibold text-lg md:text-xl'>Hello Nike App</h1>
        <p className='text-center text-sm md:text-base'>
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>

  
      <div className='mr-4 ml-4 md:mr-8 md:ml-8 mb-8'>
        <img
          src="/images/pic.3.png"
          alt="Nike Air Max Pulse"
          className="w-full h-auto object-cover"
        />
      </div>

    
      <div className='px-4'>
        <h1 className='text-center text-lg md:text-xl'>First Look</h1>
        <h1 className='font-bold text-center text-4xl md:text-6xl mt-2'>Nike Air Max Pulse</h1>
      </div>

  
      <div className='mt-6 px-4'>
        <p className='text-center font-[Helvetica Neue] text-sm md:text-base'>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br className='hidden sm:block' />
          —designed to push you past your limits and help you go to the max.
        </p>
      </div>

    
      <div className='flex flex-col sm:flex-row justify-center items-center mt-5 gap-4'>
        <Button className='rounded-full w-full sm:w-auto'>Notify Me</Button>
        <Button className='rounded-full w-full sm:w-auto'>Shop Air Max</Button>
      </div>
    </div>
  );
};

export default Hero;
