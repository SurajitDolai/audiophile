import headphone from '../assets/headphone.webp'
import Navbar from './Navbar'
import { motion } from "motion/react"

export default function First() {
  return (
    <div className='h-[cal(100%-80px)] bg-black bg-[url("F:\RECT\FRONTEND\HeadphoneWebsite\src\assets\headphone.webp")] lg:bg-none  bg-no-repeat bg-[length:700px_500px]  bg-center'>
      <div className='lg:w-[85%] mx-auto text-white pt-20 pb-20'>
        <div className='grid lg:grid-cols-2'>
          <div>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='text-transparent font-bold bg-linear-to-t from-gray-200 to-gray-500 bg-clip-text font-serif lg:text-start lg:text-base md:text-[15px] text-center'>NEW PRODUCT</motion.p>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='lg:text-7xl md:text-5xl font-bold my-5 text-gray-300 lg:text-start text-center'>XX99 MARK II <br /> HEADPHONES</motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}


              className='text-gray-200 lg:text-[20px] md:text-[15px] font-serif lg:text-start text-center '>Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.</motion.p>
            <div className='mt-5 lg:text-start text-center'>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className='bg-orange-400 font-bold p-2 '>SEE PRODUCT</motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}


            className=' hidden lg:flex justify-center items-center bg-radial from-gray-600 from-5% to-black '>
            <img src={headphone} width={500} alt="" className='drop-shadow-3xl drop-shadow-gray-600 z-10' />
          </motion.div>
        </div>

      </div>
    </div>
  )
}
