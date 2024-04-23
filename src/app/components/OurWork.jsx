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

  <div className=' w-full flex flex-col justify-between items-center mt-4 lg:flex-row h-[90%]   '>





{/* ///////////////// */}



{/* case studies 01 */}
 <Link href="/Case_studies01" className=' w-[300px] h-[250px] bg-[#33363C] rounded-xl overflow-x-hidden overflow-y-hidden hover:bg-[#33363ce6]  '>
 <img src="/Client01.png" alt="client that png" className=' w-[300px] ' />
 <div className=' IBM text-white font-bold text-[17px] py-2 border-white border-b-2 '> 8 To 24 Client In less Than 2 Months</div>
<div className=' text-start px-4 border-b-2 border-white '>
    <p className=' font-extralight text-white text-[12px] '>platforme</p>
    <div className=' flex gap-2'>
     <img src="/meta.png" alt="meta" className=' w-5 ' />
     <img src="search (1).png" alt=" google " className=' w-5'/>
    </div>
</div>
<div className=' py-1 flex px-2 gap-4 items-center'>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl text-[12px]  border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>

</div>
 </Link>

 {/* case studies 02 */}

 <Link href="/Case_studies01" className=' w-[300px] h-[250px] bg-[#33363C] rounded-xl overflow-x-hidden overflow-y-hidden hover:bg-[#33363ce6]  '>
 <img src="/Client01.png" alt="client that png" className=' w-[300px] ' />
 <div className=' IBM text-white font-bold text-[17px] py-2 border-white border-b-2 '> 8 To 24 Client In less Than 2 Months</div>
<div className=' text-start px-4 border-b-2 border-white '>
    <p className=' font-extralight text-white text-[12px] '>platforme</p>
    <div className=' flex gap-2'>
     <img src="/meta.png" alt="meta" className=' w-5 ' />
     <img src="search (1).png" alt=" google " className=' w-5'/>
    </div>
</div>
<div className=' py-1 flex px-2 gap-4 items-center'>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl text-[12px]  border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>

</div>
 </Link>


 {/* case studies 003 */}


 <Link href="/Case_studies01" className=' w-[300px] h-[250px] bg-[#33363C] rounded-xl overflow-x-hidden overflow-y-hidden hover:bg-[#33363ce6]  '>
 <img src="/Client01.png" alt="client that png" className=' w-[300px] ' />
 <div className=' IBM text-white font-bold text-[17px] py-2 border-white border-b-2 '> 8 To 24 Client In less Than 2 Months</div>
<div className=' text-start px-4 border-b-2 border-white '>
    <p className=' font-extralight text-white text-[12px] '>platforme</p>
    <div className=' flex gap-2'>
     <img src="/meta.png" alt="meta" className=' w-5 ' />
     <img src="search (1).png" alt=" google " className=' w-5'/>
    </div>
</div>
<div className=' py-1 flex px-2 gap-4 items-center'>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl text-[12px]  border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>
<div className=' text-center font-light text-[#1F53FF] rounded-2xl  text-[12px] border-[1px] border-[#1F53FF] py-1 px-3 '> paid ads </div>

</div>
 </Link>







 {/* //////////////////////////// */}


  </div>






    </section>
  )
}

export default OurWork