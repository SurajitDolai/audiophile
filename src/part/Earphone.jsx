import React from 'react'
import Navbar from '../component/Navbar'
import buds from '../assets/earbuds.webp';
import ThreeItems from '../component/ThreeItems';
import Four from '../component/Four';
import Footer from '../component/Footer';

export default function Earphone() {
  return (
    <div>
      <Navbar />
      <div className='bg-black'>
        <h1 className='text-5xl text-white py-[80px] font-semibold text-center'>EARPHONES</h1>
      </div>
      <div className='w-[85%] mx-auto relative'>
        <div className='grid grid-cols-2 my-30'>
          <div className=''>
            <img src={buds} alt="buds" className='w-[570px]' />
          </div>
          <div className='flex flex-col justify-center ps-20 gap-10'>
            <p className='text-orange-400 '>N&nbsp;E&nbsp;W&nbsp; &nbsp; &nbsp; P&nbsp; R&nbsp; O&nbsp; D&nbsp; U&nbsp; C&nbsp; T</p>
            <h1 className='text-6xl font-bold'>XX99 Mark II <br /> Headphones</h1>
            <p className='text-gray-500 font-extralight font-sans'>The new XX99 Mark II headphones is the pinnacle of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balanced depth and precision of studio- <br />quality sound.</p>
            <div className=''>
              <button className='bg-orange-400 font-bold p-2 '>SEE PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
      <ThreeItems />
      <Four />
      <Footer />
    </div>
  )
}
