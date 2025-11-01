import headphone from '../assets/phone.png';
import speaker from '../assets/speaker.png';
import earphone from '../assets/earphone.png';
import ThreeItems from './ThreeItems';
import {motion} from 'motion/react';

export default function Second() {
    return (
        <div className=' relative'>
            
        <ThreeItems/>

            <div className='w-[85%]  bg-amber-600 mx-auto mt-[10%] lg:h-[500px]  mb-15 rounded-2xl'>
                <div className='grid lg:grid-cols-2'>
                    <div className=''>
                       <div className='h-[500px] overflow-hidden '>
                         <motion.img
                         initial={{opacity:0, y:200}}
                         whileInView={{opacity:1, y:0}}
                         transition={{duration:0.5}}
                         src={speaker} width={600} height={600} alt="" className='object-cover lg:mx-0 mx-auto  mt-30'/>
                       </div>
                        
                    </div>
                    <div className='flex flex-col justify-center lg:items-start items-center lg:h-[500px] h-[400px]'>
                        <motion.p
                        initial={{opacity:0, x:-200}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:0.5,}}
                        className='text-white text-7xl lg:text-start text-center'>ZX9 <br /> SPEAKER</motion.p>
                        <motion.p
                        initial={{opacity:0, x:-200}}
                        whileInView={{opacity:1,x:0}}
                        transition={{duration:0.5,}}
                        className='my-3 text-gray-200 lg:text-start text-center'>Upgrade to premium speaker that are <br /> phonemenally built to delivery truly remarkable <br /> sound.</motion.p>
                        <motion.button
                        initial={{opacity:0, scale:0.9}}
                        whileInView={{opacity:1, scale:1}}
                        transition={{duration:0.5,}}
                        className='bg-black text-white font-bold px-4 py-2'>SEE PRODUCT</motion.button>
                    </div>
                </div>

            </div>
        </div>
    )
}


