import React from 'react';
import { Input } from "@/components/ui/input";
import { BiBriefcase } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  return (
    <div className='bg-[#FFFFFF] flex flex-wrap items-center justify-between p-4 md:h-20 mb-4'>
      
      <div className='pl-4 flex-shrink-0'>
        <img src="/images/pic.2.png" alt="Logo" className="h-10 md:h-14 w-auto" />
      </div>


      <div className='hidden md:flex flex-1 justify-center'>
        <ul className='flex gap-4 md:gap-7 font-semibold text-sm md:text-base'>
          <li>New & featured</li>
          <li>Men</li>
          <li>Woman</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
        </ul>
      </div>

  
      <div className='flex flex-1 justify-end items-center gap-3'>
        <Input
          placeholder='Search'
          className="hidden sm:block w-24 md:w-40 lg:w-64"
        />
        <AiOutlineHeart className="text-lg md:text-xl" />
        <BiBriefcase className="text-lg md:text-xl" />
      </div>
    </div>
  );
};

export default Header;
