'use client';
import React from 'react'
import Vite from './Vite'
import { motion } from 'framer-motion';
import Image from 'next/image';

function Page02() {
  return (
    <section className=' w-full h-full  flex flex-col items-center gap-8 bg-slate-200 ' id='Services'>
      <Vite/> 
      <motion.div className=' w-[58%] text-center font-bold  ' initial={{y:100 , opacity:0}} whileInView={{opacity:1 , y:0}} transition={{duration:0.7}}>
      <h1 className=' red text-[41px] text-slate-800 '>
      Our experts create personalized marketing strategies for you
      </h1>
      <p className='  text-[#33363C] font-light '>
      Our experts create customized marketing strategies for you and apply them to ensure increased sales and maximum profits using several means
        </p>
      </motion.div>
      <hr />

      <motion.section className=' w-[60%] flex flex-col gap-8' >
        {/* the firest column */}

<motion.div className=' px-1 py-1 flex justify-evenly flex-wrap' initial={{y:70, opacity:0}} whileInView={{opacity:1 , y:0}} transition={{duration:0.5}}>

  <div className=' text-center'>
<Image
src='/ads.png'
width={70}
height={70}
/>
<h2 className=' mt-2 text-[#33363C] red  font-semibold '>Paid Ads</h2>
</div>

<div className=' text-center'>
<Image
src='/graphic-design.png'
width={70}
height={70}
/>
<h2 className=' mt-2 text-[#33363C] red  font-semibold  '>Design</h2>
</div>

<div className=' text-center'>
<Image
src='/software.png'
width={70}
height={70}
/>
<h2 className=' mt-2 text-[#33363C] red font-semibold -mr-2'>Web <br /> Development</h2>
</div>



</motion.div>

{/* the seconde column  */}

<motion.div className=' px-1 py-1 flex justify-evenly  font-semibold flex-wrap  ' initial={{y:70, opacity:0}} whileInView={{opacity:1 , y:0}} transition={{duration:0.5}}>

<div className=' text-center'>
<Image
src='/video-editing.png'
width={70}
height={70}
/>
<h2 className=' mt-2 text-[#33363C] red font-semibold -mr-2 '>video editing</h2>
</div>

<div className=' text-center'>
<Image
src='/business-plan.png'
width={70}
height={70}
/>
<h2 className=' mt-2 text-[#33363C] red font-semibold -mr-2'>Marketing Plan</h2>
</div>

<div className=' text-center'>
<Image
src='/creative.png'
width={70}
height={70}
/>
<h2 className=' mt-2 text-[#33363C] red  font-semibold  '>Social Media <br /> Marketing</h2>
</div>







</motion.div>





      </motion.section>






    </section>
  )
}

export default Page02