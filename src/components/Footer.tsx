import React from 'react'
import Category1 from './Category1'
import Category2 from './Category2'
import footer from "../assets/footer.png"
import foot from "../assets/footer1.png"
function Footer() {
  return (
    <div className='bg-[rgb(247,247,247)]'>
      {/* <Category1/>   
       <Category2/> */}
      <img src={foot} alt="" />
      <img src={footer} alt="" />
    </div>
  )
}

export default Footer