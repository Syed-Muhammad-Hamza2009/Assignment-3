import React from 'react'
import Image from 'next/image';


const Hero = () => {
  return (
    <div className = "flex justify-between items-center h-screen bg-[#E8F5E9]">
      <div className = "w-1/2 text-primary pl-24 cursor-pointer">
      <h1 className = "font-bold text-8xl hover:text-[#D3A4FF] animate-bounce" >Welcome To <br/>P<sub>i</sub>ne<sup>F</sup>lo<sub>r</sub>a</h1>
     <p className = "pt-6 hover:underline underline-offset-8">
     Discover The Elegance Of Nature With Our Unique Floral Selections
     </p>
     
     <button className="mt-8 bg-[#a75cee] hover:bg-[#B28AEE] text-white font-semibold py-3 px-8 rounded">
          Explore Now
        </button>
      
      </div>
      <div className = "w-1/2 flex justify-end pr-10" >
      <Image
      src = "/images/flower.png"
      alt = "Floral"
      width = {500}
      height = {500}
      />
       </div>
    </div>
  )
}

export default Hero
