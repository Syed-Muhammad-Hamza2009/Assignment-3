import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className = "bg-[#E8F5E9]  h-20 flex justify-between items-center cursor-pointer ">
      
      <h1 className = "text-primary font-bold text-5xl pl-32">
        <Link className = 'hover:text-[#D3A4FF]' href= "/">P<sub>i</sub>ne<sup>F</sup>lo<sub>r</sub>a</Link>
        </h1>

      <nav className = "sticky top-0 z-30">
        <ul className = "flex gap-10 text-secondary font-bold cursor-pointer text-xl mr-20 ">
            <li><Link className = 'hover:underline underline-offset-2 ' href = "/">Home</Link></li>
            <li><Link className = 'hover:underline underline-offset-2' href = "/">Contact</Link></li>
            <li><Link className = 'hover:underline underline-~offset-2' href = "/">About</Link></li>
            
        </ul>
        </nav>
      
  
    
    </div>

  )
}

export default Navbar