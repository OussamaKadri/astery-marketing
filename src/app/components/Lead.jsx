
import React from 'react'
import Link from 'next/link';

function Lead() {
  return (
    <div className=' w-full h-[65vh] bg-[#1C1A27] rotate-3 scale-125  mt-20 lg:mt-1 text-center  py-2 flex flex-col items-center' id='LeadMagnet'>
<h3 className=' text-[#1F53FF] g font-light text-[18px] -rotate-3'> Our Plan </h3>
<div className='w-[50%] py-2'>
<h1 className=' lg:text-[32px] font-bold text-[#cfcfcf]  -rotate-3 Bur text-[20px]  '>
How to double your sales and grow your company to millions a month 
</h1>
</div>
<div className=' mt-8 -rotate-3 flex flex-col items-center   lg:w-[50%] w-[70%] '>
< Link href="Lead_Magnet" className=' mt-8 bg-[#4b73f8] text-white lg:px-6 px-3  py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg Bur '>Start Now For free </Link>
  </div>


    </div>
  )
}

export default Lead