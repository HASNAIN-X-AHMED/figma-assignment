import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='bg-[#111111] mt-12 px-4'>
      {/* Top Footer Section */}
      <div className='flex flex-wrap justify-between gap-8'>
        {/* First Column */}
        <div className='text-[#FFFFFF] leading-5 space-y-3 mt-3 w-full sm:w-auto'>
          <ul>
            <li>Find A Store</li>
            <li>Become A Member</li>
            <li>Sign Up for Email</li>
            <li>Send Us Feedback</li>
            <li>Student Discounts</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className='text-[#7E7E7E] leading-5 space-y-3 mt-3 w-full sm:w-auto'>
          <ul>
            <li className='text-[#FFFFFF]'>Get Help</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className='text-[#7E7E7E] leading-5 space-y-3 mt-3 w-full sm:w-auto'>
          <ul>
            <li className='text-[#FFFFFF]'>About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className='flex gap-4 mt-3 w-full sm:w-auto'>
          <TiSocialTwitterCircular className='text-[#7E7E7E] text-2xl' />
          <BsFacebook className='text-[#7E7E7E] text-2xl' />
          <TiSocialYoutubeCircular className='text-[#7E7E7E] text-2xl' />
          <TiSocialInstagram className='text-[#7E7E7E] text-2xl' />
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className='mt-4 flex flex-wrap justify-between items-center'>
        <div className='flex space-x-3 items-center w-full sm:w-auto'>
          <img src="/images/pic.16.png" alt="Logo" height={30} width={30} />
          <h1 className='text-white'>India</h1>
          <p className='text-[#7E7E7E]'>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        <div className='w-full sm:w-auto'>
          <ul className='text-[#7E7E7E] flex space-x-4 justify-center sm:justify-end'>
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
