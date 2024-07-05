import React from 'react'
import mansion from "../assets/mansions.png"
import boat from "../assets/boats.png"
import luxe from "../assets/luxe2.png"
import piano from "../assets/grand-piano.png"
import lake from "../assets/lakefront.png"
import skiing from "../assets/skiing.png"
import tree from "../assets/treeHouse.png"
import omg from "../assets/omg.png"
import pool from "../assets/amazing-pool.png"
import amazing from "../assets/Amazing views.png"
import cabin from "../assets/cabin.png"
import beach from "../assets/Beachfronts.png"
import right from "../assets/Right caret category.png"
import button from "../assets/Button.png"
function Frame() {
  return (
    <div className='flex justify-around py-5'>
        <div className='hidden md:block'>
            <img src={amazing} alt="" />
            <p className='text-xs pt-2'>Amazing views</p>
        </div>
        <div className='hidden md:block'>
            <img src={cabin} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={beach} alt="" />
            <p className='text-xs pt-2 '>Beachfront</p>
        </div>
        <div className='hidden md:block'>
            <img src={skiing} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={piano} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={mansion} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={omg} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={pool} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={luxe} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={boat} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={lake} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={tree} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={right} alt="" />
        </div>
        <div className='hidden md:block'>
            <img src={button} alt="" />
        </div>
        
    </div>
  )
}

export default Frame