import {motion} from 'motion/react';
import headphone from '../assets/phone.png';
import speaker from '../assets/speaker.png';
import earphone from '../assets/earphone.png';

export default function ThreeItems() {
  return (
    <div className='relative lg:h-[450px] md:h-[400px] h-[700px] flex justify-center '>
      <div className='flex md:flex-row  flex-col md:justify-between md:items-end  justify-evenly  lg:pt-[10%] md:pt-[15%] w-[85%] mx-auto '>
        <div className='lg:w-[25%] md:w-[30%] bg-gray-200 lg:h-50 md:h-40 h-40 lg:mb-15 md:mb-10   rounded-2xl '>
          <div className='flex justify-center '>
            <motion.img
            initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
            src={headphone} alt="" className='absolute lg:top-1 md:top-10 top-[-30px]  lg:mt-6 drop-shadow-lg drop-shadow-gray-800  lg:w-[330px] md:w-[300px] w-[220px] bg-amber-80 ' />
          </div>
          <div className='text-center mt-[30%]'>
            <p className='font-bold text-black lg:text-3xl md:text-[15px] font-serif mb-3'>HEADPHONES</p>
            <span className='font-bold text-gray-400 lg:text-base md:text-[12px]'>SHOP <i className="fa-solid fa-greater-than fa-xs" style={{ color: '#e67a00' }}></i></span>
          </div>
        </div>
        <div className='lg:w-[25%] md:w-[30%] bg-gray-200 lg:h-50 md:h-40 lg:mb-15 md:mb-10  rounded-2xl'>
          <div className='flex justify-center'>
            <motion.img
            initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
            src={speaker} alt="" className=' absolute lg:top-3 md:top-23 top-[220px]  lg:mt-14 drop-shadow-lg drop-shadow-gray-800  lg:w-[300px] md:w-[250px] w-[210px]' />
          </div>
          <div className='text-center mt-[30%]'>
            <p className='font-bold text-black lg:text-3xl md:text-[15px] font-serif mb-3'>SPEAKERS</p>
            <span className='font-bold text-gray-400 lg:text-base md:text-[12px]'>SHOP <i className="fa-solid fa-greater-than fa-xs" style={{ color: '#e67a00' }}></i></span>
          </div>
        </div>
        <div className='lg:w-[25%] md:w-[30%] bg-gray-200 lg:h-50 md:h-40 lg:mb-15 md:mb-10  rounded-2xl'>
          <div className='flex justify-center'>
            <motion.img
            initial={{ opacity: 0, y: -50 }}
             whileInView={{ opacity: 1, y: 3 }}
            transition={{ duration: 0.5, }}
            src={earphone} alt="" className=' absolute lg:top-4 md:top-14 top-[400px] drop-shadow-lg drop-shadow-gray-800  lg:w-[300px] md:w-[250px] w-[210px]' />
          </div>
          <div className='text-center mt-[30%]'>
            <p className='font-bold text-black lg:text-3xl md:text-[15px] font-serif mb-3'>EARPHONES</p>
            <span className='font-bold text-gray-400 lg:text-base md:text-[12px]'>SHOP <i className="fa-solid fa-greater-than fa-xs" style={{ color: '#e67a00' }}></i></span>
          </div>
        </div>

      </div>
    </div>
  )
}
