import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const[navbar,setNavbar]=useState(false)
  return (
    <div className='bg-black lg:sticky top-0 z-20'>
      <div className='w-[85%] mx-auto bg-black flex justify-between items-center h-20 border-b-[2px] border-gray-800 px-2'>

        <div className='flex  gap-7 items-center '>
          <div className='lg:hidden'>
            <i className="fa-solid fa-bars text-white text-3xl" onClick={()=>setNavbar(!navbar)}></i>
          </div>
          <h1 className='text-3xl text-white font-bold font-[Berlin Sans FB Demi] pb-3 lg:pb-0'>audiophile</h1>
        </div>
        <div className='text-white '>
          <ul className={`flex lg:flex-row flex-col lg:relative lg:top-0 lg:left-0 absolute  top-[80px] lg:bg-transparent bg-gray-700 lg:gap-10 gap-y-10 font-bold
              transition-all duration-500 ease-in-out ${navbar?'left-0':'-left-full'}  w-[30%] md:w-[20%] lg:w-auto
            `}>

            <NavLink to="/" end className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-500 ease-in-out"
                : "text-white transition-colors duration-500 ease-in-out"
            }>HOME</NavLink>
            <NavLink to="/headphones" className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-1000 ease-in-out"
                : "text-white transition-colors duration-1000 ease-in-out"
            }>HEADPHONES</NavLink>
            <NavLink to="/speakers" className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-500 ease-in-out"
                : "text-white transition-colors duration-500 ease-in-out"
            }>SPEAKERS</NavLink>
            <NavLink to="/earphones" className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-500 ease-in-out"
                : "text-white transition-colors duration-500 ease-in-out"
            }>EARPHONES</NavLink>
          </ul>
        </div>
        <div>
          <i className="fa-solid fa-cart-plus fa-lg hover:pb-6 transition-all duration-300 ease-in-out cursor-pointer" style={{ color: ' #ffffff' }}></i>
        </div>
      </div>
    </div>
  )
}
