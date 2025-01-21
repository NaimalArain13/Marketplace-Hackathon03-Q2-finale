import React from 'react'
import Image from "next/image";
import CountDownTimer from './count-down';


function CategoryImage() {
  return (
    <div className='mx-auto w-full py-7  text-white'>
        <div className=' bg-[#252B42] flex flex-col md:flex-row md:justify-between gap-11 md:gap-6  p-7'>
       <div className='md:w-1/2 w-full flex flex-col gap-5 mb-7 md:mb-0'>
      
       <h1 className='font-semibold text-[48px]'>Enhance Your Beauty With Our Exclusive Collection</h1>
       <CountDownTimer />
       <div className='mt-4"'>
       <button className='px-5 p-3 rounded hover:bg-gray-400 font-semibold text-black bg-white '>
        Buy Now
       </button>
       </div>
       </div>
       <div className='md:w-1/2 flex items-center justify-center w-full'>
        <Image src={"https://i.pinimg.com/236x/af/3c/b5/af3cb50cec2b80f41ac063b5b33f651e.jpg"} alt="Frame Image" width={600} height={420}/>
       </div>
       </div>
    </div>
  )
}

export default CategoryImage