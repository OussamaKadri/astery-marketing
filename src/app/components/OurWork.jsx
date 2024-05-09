import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function OurWork() {
  return (
    <section className=' text-center w-full h-full pt-6 ' id='OurWork'>
        {/* Defitions */}
<h1 className=' text-slate-900 text-[35px] g underline '>
احصائيات أكثر 

</h1>

  {/* case studies */}

  <div className=' w-full flex flex-col justify-around items-center mt-4 lg:flex-row h-[90%]   '>





{/* ///////////////// */}



{/* case studies 01 */}
 <Link href="/Case_studies01" className=' w-[400px] h-[450px] bg-[#33363C] rounded-xl overflow-x-hidden overflow-y-hidden hover:bg-[#33363ce6]  '>
 <img src="/Client01.png" alt="client that png" className=' w-[400px] ' />
 <div className=' IBM text-white font-bold text-[27px] py-2 border-white border-b-2 '> 8 To 24 Client In less Than 4 Months</div>
<div className=' text-start px-4 border-b-2 flex items-center justify-start gap-6  border-white '>
    <p className=' font-extralight text-white text-[20px] '>Channels</p>
    <div className=' flex gap-2'>
     <img src="/meta.png" alt="meta" className=' w-10 ' />
     <img src="search (1).png" alt=" google " className=' w-10'/>
    </div>
</div>
<div className=' py-1 flex px-2 gap-4 items-center'>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl text-[12px]  border-[1px] border-[#1F53FF] py-1 px-3 '> Content Marketing  </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> Email Marketing  </div>


</div>
 </Link>

 {/* case studies 02 */}
 
 <Link href="/Case_studies01" className=' w-[400px] h-[450px] bg-[#33363C] rounded-xl overflow-x-hidden overflow-y-hidden hover:bg-[#33363ce6]  '>
 <img src="/Client01.png" alt="client that png" className=' w-[400px] ' />
 <div className=' IBM text-white font-bold text-[27px] py-2 border-white border-b-2 '> 8 To 24 Client In less Than 4 Months</div>
<div className=' text-start px-4 border-b-2 flex items-center justify-start gap-6  border-white '>
    <p className=' font-extralight text-white text-[20px] '>Channels</p>
    <div className=' flex gap-2'>
     <img src="/meta.png" alt="meta" className=' w-10 ' />
     <img src="search (1).png" alt=" google " className=' w-10'/>
    </div>
</div>
<div className=' py-1 flex px-2 gap-4 items-center'>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl text-[12px]  border-[1px] border-[#1F53FF] py-1 px-3 '> Content Marketing  </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> Email Marketing  </div>


</div>
 </Link>

 

 {/*  Case studer 03  */}

 <Link href="/Case_studies01" className=' w-[400px] h-[450px] bg-[#33363C] rounded-xl overflow-x-hidden overflow-y-hidden hover:bg-[#33363ce6]  '>
 <img src="/Client01.png" alt="client that png" className=' w-[400px] ' />
 <div className=' IBM text-white font-bold text-[27px] py-2 border-white border-b-2 '> 8 To 24 Client In less Than 4 Months</div>
<div className=' text-start px-4 border-b-2 flex items-center justify-start gap-6  border-white '>
    <p className=' font-extralight text-white text-[20px] '>Channels</p>
    <div className=' flex gap-2'>
     <img src="/meta.png" alt="meta" className=' w-10 ' />
     <img src="search (1).png" alt=" google " className=' w-10'/>
    </div>
</div>
<div className=' py-1 flex px-2 gap-4 items-center'>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl text-[12px]  border-[1px] border-[#1F53FF] py-1 px-3 '> Content Marketing  </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> Email Marketing  </div>


</div>
 </Link>



 {/* //////////////////////////// */}


  </div>






    </section>
  )
}

export default OurWork