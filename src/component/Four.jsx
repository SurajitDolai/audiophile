import man from '../assets/man.webp';
import {motion} from 'motion/react';

export default function Four() {
  return (
    <div className='lg:h-screen'>
        <div className='w-[85%] mx-auto flex lg:flex-row md:flex-col-reverse justify-between items-center lg:h-full '>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
            className='lg:w-[49%] w-full lg:my-0 my-9 lg:text-base text-center'>
                <p className='text-3xl font-bold mb-9 '>BRINGING YOU THE <br /> <span className='text-orange-400'>BEST</span> AUDIO GEAR</p>
                <span className='text-gray-500 font-serif '>Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and <br /> audio accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.</span>
            </motion.div>
            <div className='lg:w-[49%] w-full lg:h-auto h-[500px]'>
                <img src={man} alt="" className='lg:object-none object-center object-cover aspect-[5/6] lg:w-auto w-full h-[500px]' />
            </div>
        </div>
      
    </div>
  )
}
