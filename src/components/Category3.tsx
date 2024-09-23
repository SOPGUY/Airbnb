import React from 'react'
import {  Globe } from "lucide-react";
import img1 from "../assets/facebook2.png"
import img2 from "../assets/twitter.png"
import img3 from "../assets/instagram.png"

function Category3() {
  return (
    <div className='flex flex-wrap-reverse lg:flex justify-between pt-10'>
        <div className='pl-10 lg:flex gap-5 '>
            <p>2024 Airbnb, Inc. </p>
            <span className='ml-3 hidden md:block '>.</span>
            <div className='grid grid-cols-3 lg:grid-flow-col lg:gap-3 '>
            <p>Terms <span className='ml-3'>.</span></p>
            <p>Sitemap  <span className='ml-3'>.</span></p>
            <p>Privacy  <span className='ml-3'>.</span></p>
            <p className='text-nowrap lg:text-wrap'>Your Privacy Choices</p>
            </div>
        </div>
        <div className='flex gap-3 pl-10 py-4 lg:pr-10'>
        <Globe />
            <p>NGN</p>
            <img src={img1} className='h-5 hidden md:block' alt="facebook logo" />
            <img src={img2} className='h-5 hidden md:block' alt="twitter logo" />
            <img src={img3} className='h-5 hidden md:block' alt="instagram logo" />
        </div>
         
    </div>
  )
}

export default Category3