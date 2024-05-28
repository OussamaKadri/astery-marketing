
import React from 'react'
import Link from 'next/link';

function Lead() {
  return (
    <div className=' w-full h-[65vh] bg-[#1C1A27] rotate-3 scale-125  mt-20 lg:mt-1 text-center  py-2 flex flex-col items-center' id='LeadMagnet'>
<h3 className=' text-[#1F53FF] g font-light text-[18px] -rotate-3'> Our Plan </h3>
<div className='w-[50%] py-2'>
<h1 className=' text-[32px] font-bold text-[#cfcfcf]  -rotate-3 Bur  '>
How to double your sales and grow your company to millions a month 
</h1>
</div>
<div className=' mt-8 -rotate-3 flex flex-col items-center   lg:w-[50%] w-[70%] '>
<iframe className=' aspect-video w-full rounded-xl mb-8 ml-5 md:ml-0 lg:ml-0' src="https://www.youtube.com/embed/8cqiKjiGKOo?si=ub7TylHd50KhwTk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
< Link href="Lead_Magnet" className=' mt-8 bg-[#4b73f8] text-white lg:px-6 px-3  py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg IBM '>  احصل على خطتك التسويقية مجانا</Link>
  </div>


    </div>
  )
}

export default Lead