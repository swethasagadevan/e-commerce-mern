import React from 'react'
import {FaPhoneAlt,FaHeadset, FaMapMarked,FaTwitter,FaFacebook,FaInstagram} from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  const productLinks =["Prices drop","New products","Best sales","Contact us","Sitemap","Stores"]
  const links =["About Us","Delivery Information","Privacy Policy","Terms & Conditions","Support Center","Careers"]
  return (
    <footer className='p-4 border-t-2'>
    <div className='flex flex-wrap items-center justify-around border-b-2 p-4'>
      <div className='flex flex-col flex-wrap gap-1 border-r-2 p-4'>
      <h1 className='text-2xl font-bold'>BUYLO</h1>
      <p>Awesome shopping experience</p>
      <div className='flex items-center gap-1'><FaMapMarked/><p>Address: 5171 W Richmond street, Bengaluru 531270</p></div>
      <div className='flex items-center gap-1'><FaPhoneAlt/><p>Call Us: (+91) - 540-025-124553</p></div>
      <div className='flex items-center gap-1'><IoMdMail/><p>Email: sale@buylo.com</p></div>
      <div className='flex items-center gap-1'><FaHeadset/><p>Hours: 10:00 - 18:00, Mon - Sat</p></div>
      </div>
    
    <div className='flex flex-col gap-1'>
      <h3 className='font-bold py-2'>Products</h3>
      {productLinks.map((data,index)=>(<a className='hover:scale-105 cursor-pointer' key={index}>{data}</a>))}
    </div>
    
    <div className='flex flex-col gap-1'>
      <h3 className='font-bold py-2'>Company</h3>
      {links.map((data,index)=>(<a className='hover:scale-105 cursor-pointer' key={index}>{data}</a>))}
    </div>
    
    {/* <div className='flex flex-col'>
      <h3 className='font-bold py-2'>Let us Help you</h3>
      {links.map((data,index)=>(<a className='hover:scale-105 cursor-pointer' key={index}>{data}</a>))}
    </div> */}
      </div>  

      <div className='mx-32 p-3 text-center'>
      <h3 className='font-bold py-2'>Subscribe to newsletter</h3>
      <p>Subscribe to our latest newsletter to get news about special discounts.</p>
      <input className='border-2 p-2 w-1/3 m-2' placeholder='Enter your email address'></input>
      <div className='flex gap-1 justify-center'>
        <input type='checkbox'></input> <p>I agree to the terms and conditions and the privacy policy</p>
      </div>
      <button className='bg-orange-500 p-2 m-2 text-white'>SUBSCRIBE</button>
      
    </div>

    <div className='p-4 flex items-center justify-between border-t-2'>
      <p> &copy; 2026, All rights reserved</p>
      <div className='flex gap-2 items-center'>
        <p>Follow us : </p>
        <FaTwitter/>
        <FaFacebook/>
        <FaInstagram/>
      </div>
    </div>
    </footer>
  )
}

export default Footer;