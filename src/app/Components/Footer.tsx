import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";





const Footer = () => {
  return (
    <div className = "bg-[#2C3E50] h-[55] flex flex-col justify-center">
     
      <div className = "flex flex-col justify-start space-y-4 mt-8 ml-10 cursor-pointer">
      <div className = "flex text-white ">
      <FaSquarePhone  className = "w-8 h-8"/>
      <span className = "ml-2 mt-2 hover:underline underline-offset-2">032445722140</span>
      </div>
      <div className = "flex text-white">
      <BiLogoGmail className = "w-8 h-8 hover:underline underline-offset-2" />
      <span className = "ml-2 mt-2 hover:underline underline-offset-2">pineflora@gmail.com</span> 
      </div>
      <div className = "flex text-white">
      <FaMapMarkerAlt className = "w-8 h-8 hover:underline underline-offset-2"/>
      <span className = "ml-2 mt-2 hover:underline underline-offset-2">456 Elm Avenue, Floor 3 Central Plaza Metrotown, TX 75001 United States
        </span>
      </div>
    
      <div className = "flex justify-center items-center ">
      <h1 className = "text-white font-semi-bold hover:underline underline-offset-2">All Right Reserved</h1>
      </div>
</div>

    </div>
  )
}

export default Footer