import headcharger from '../assets/headcharger.webp';
import halfspeaker from '../assets/half_speaker.png';

export default function Third() {
  return (
    <div className='h-screen'>
      <div className='w-[85%] mx-auto bg-gray-200 flex justify-between items-center h-67  border-gray-800  rounded-2xl  '>
        <div className=' ms-[10%]'>
          <p className='text-2xl font-bold text-gray-900 mb-6'>ZX7 SPEAKER</p>
          <button className='border-2 border-black text-gray-500 text-[10px] font-bold px-8 py-3'>SEE PRODUCT</button>
        </div>
       <div>
         <img src={halfspeaker} alt="" className='overflow-hidden' />
       </div>
      </div>
      <div className='w-[85%] mx-auto  flex justify-between items-center h-70 mt-10  border-gray-800  rounded-2xl  '>
        <div className='lg:w-[49%] w-[49%] lg:h-70  overflow-hidden rounded-2xl '>
          <img src={headcharger} alt="" className='overflow-hidden lg:h-auto h-72' />
        </div>
        <div className='lg:w-[49%] w-[49%] bg-gray-100 lg:h-70 md:h-[100%] rounded-2xl flex flex-col justify-center items-start'>
          <div className='ms-[20%]'>
            <p className='text-3xl font-bold mb-5'>YX1 EARPHONE</p>
            <button className='border-2 border-black text-gray-500 text-[10px] font-bold px-8 py-3'>SEE PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
