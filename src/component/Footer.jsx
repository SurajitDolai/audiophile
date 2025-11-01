import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-black'>
            <div className='w-[85%] mx-auto py-20 bg-black'>
                <div className='flex justify-between'>
                    <div className='text-white lg:w-[50%] '>
                        <h1 className='text-2xl font-bold'> audiophile</h1>
                        <div className='w-[50%] flex flex-col justify-start  lg:hidden *:mt-9'>
                            <ul className='text-white flex gap-8'>
                                <NavLink to="/">HOME</NavLink>
                                <NavLink to="/headphones">HEADPHONES</NavLink>
                                <NavLink to="/speakers">SPEAKERS</NavLink>
                                <NavLink to="/earphones">EARPHONES</NavLink>
                            </ul>
                        </div>

                        <p className='my-9 font-serif text-gray-400 '>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
                       <div className='flex justify-between items-center w-full '>
                         <span className='font-semibold text-gray-400'>Copyright 2021. All Rights Reserved</span>
                          <div className=' flex gap-3'>
                            <i className="fa-brands fa-square-facebook fa-lg" style={{ color: '#ffffff' }}></i>
                            <i className="fa-brands fa-twitter fa-lg" style={{ color: '#ffffff' }}></i>
                            <i className="fa-brands fa-instagram fa-lg" style={{ color: '#ffffff' }}></i>
                        </div>
                       </div>
                    </div>
                    <div className='w-[50%] lg:flex flex-col justify-start items-end hidden '>
                        <ul className='text-white lg:flex gap-8 hidden '>
                            <NavLink to="/" end className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-500 ease-in-out"
                : "text-white transition-colors duration-500 ease-in-out"
            }
                            >HOME</NavLink>
                            <NavLink to="/headphones" end className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-500 ease-in-out"
                : "text-white transition-colors duration-500 ease-in-out"
            }
                            >HEADPHONES</NavLink>
                            <NavLink to="/speakers" end className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-500 ease-in-out"
                : "text-white transition-colors duration-500 ease-in-out"
            }
                            >SPEAKERS</NavLink>
                            <NavLink to="/earphones" end className={({ isActive }) =>
              isActive
                ? "text-orange-500 bg-bisque rounded-full font-bold transition-colors duration-500 ease-in-out"
                : "text-white transition-colors duration-500 ease-in-out"
            }
                            >EARPHONES</NavLink>
                        </ul>
                        <div className='mt-26 flex gap-3'>
                            <i className="fa-brands fa-square-facebook fa-lg" style={{ color: '#ffffff' }}></i>
                            <i className="fa-brands fa-twitter fa-lg" style={{ color: '#ffffff' }}></i>
                            <i className="fa-brands fa-instagram fa-lg" style={{ color: '#ffffff' }}></i>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}
