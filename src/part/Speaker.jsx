import {motion} from 'motion/react';
import Navbar from '../component/Navbar'
import speaker1 from '../assets/speaker1.webp'
import speaker2 from '../assets/speaker2.webp'
import ThreeItems from '../component/ThreeItems'
import Four from '../component/Four'
import Footer from '../component/Footer'
export default function Speaker() {
  return (
    <div className='relative'>
      <Navbar />
      <div className='bg-black'>
        <h1 className='text-5xl text-white py-[80px] font-semibold text-center'>SPEAKERS</h1>
      </div>
      <div className='w-[85%] mx-auto relative'>
        <div className='grid grid-cols-2 my-30'>
          <div className=''>
            <img src={speaker1} alt="Speaker" className='w-[570px]' />
          </div>
          <div className='flex flex-col justify-center ps-20 gap-10'>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-orange-400 '>N&nbsp;E&nbsp;W&nbsp; &nbsp; &nbsp; P&nbsp; R&nbsp; O&nbsp; D&nbsp; U&nbsp; C&nbsp; T</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-6xl font-bold'>ZX9 Speaker</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className='text-gray-500 font-extralight font-sans'>TUpgrade your sound system with the all new ZX9 active <br /> speaker. It’s a bookshelf speaker system that offers truly <br /> wireless connectivity -- creating new possibilities for more <br /> pleasing and practical audio setups.</motion.p>
            <div className=''>
              <motion.button
             initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              className='bg-orange-400 font-bold p-2 '>SEE PRODUCT</motion.button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2'>
          <div className="flex flex-col justify-center gap-8">
            <motion.h1
            initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className='text-6xl font-bold'>XX99 Mark I <br /> Headphones</motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            className='text-gray-500 font-extralight font-sans'>Stream high quality sound wirelessly with minimal to no loss. <br /> The ZX7 speaker uses high-end audiophile components that <br /> represents the top of the line powered speakers for home or <br /> studio use.</motion.p>
            <div className=''>
              <motion.button
              initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              className='bg-orange-400 font-bold p-2 '>SEE PRODUCT</motion.button>
            </div>
          </div>
          <div className="">
            <img src={speaker2} alt="" className='w-[570px]' />
          </div>
        </div>
      </div>
      <ThreeItems />
      <Four />
      <Footer />
    </div>
  )
}
