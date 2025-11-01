import { motion } from 'motion/react';
import Navbar from '../component/Navbar'
import speaker from '../assets/headphonePage.webp';
import headphone1 from '../assets/secondheadphone.webp';
import whiteheadphone from '../assets/whiteheadphone.webp'
import ThreeItems from '../component/ThreeItems';
import Four from '../component/Four';
import Footer from '../component/Footer';

export default function Headphone() {
  return (
    <div className=''>
      <Navbar />
      <div className='bg-black'>
        <h1 className='text-5xl text-white py-[80px] font-semibold text-center'>HEADPHONES</h1>
      </div>
      <div className='w-[85%] mx-auto relative'>
        <div className='grid grid-cols-2 my-30'>
          <div className=''>
            <img src={speaker} alt="Speaker" className='w-[570px]' />
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
              className='text-6xl font-bold'>XX99 Mark II <br /> Headphones</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-gray-500 font-extralight font-sans'>The new XX99 Mark II headphones is the pinnacle of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balanced depth and precision of studio- <br />quality sound.</motion.p>
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
              className='text-gray-500 font-extralight font-sans'>As the gold standard for headphones, the classic XX99 Mark <br /> I offers detailed and accurate audio reproduction for <br /> audiophiles, mixing engineers, and music aficionados alike in <br /> studios and on the go.</motion.p>
            <div className=''>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='bg-orange-400 font-bold p-2 '>SEE PRODUCT</motion.button>
            </div>
          </div>
          <div className="">
            <img src={headphone1} alt="" className='w-[570px]' />
          </div>
        </div>

        <div className='grid grid-cols-2 mt-30 mb-20'>
          <div className=''>
            <img src={whiteheadphone} alt="Speaker" className='w-[570px]' />
          </div>
          <div className='flex flex-col justify-center ps-20 gap-10'>

            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-6xl font-bold'>XX59 <br /> Headphones</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-gray-500 font-extralight font-sans'>Enjoy your audio almost anywhere and customize it to your <br /> specific tastes with the XX59 headphones. The stylish yet <br /> durable versatile wireless headset is a brilliant companion at <br /> home or on the move.</motion.p>
            <div className=''>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='bg-orange-400 font-bold p-2 '>SEE PRODUCT</motion.button>
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
