'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CTA from '../components/CTA'

function How() {
  return (
    <div className=' w-[100vw] flex flex-col items-center h-[200vh] pt-10 bg-slate-200 overflow-x-hidden '>
   {/*  How we Can work  */}
<motion.h1 className='text-slate-900 red text-[40px] '  initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.65}}> How we Can Start Work ?</motion.h1>
<motion.p className=' text-slate-900 red lg:w-[60%] w-[80%]  text-center pt-4 ' initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 1}} > First, I want to thank you for choosing us and be sure that we are the best company that can help you achieve your sales goals  </motion.p>


{/*  step 01  */}
<h1 className=' text-slate-900  text-[30px] mt-10 Bur  '  > Step 1  </h1>
<motion.p className=' text-black  red mt-10 lg:w-[60%]  w-[80%] text-center  ' initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.65}} > First, you should answer this question about your work and your personal information. To schedule the meeting time, you can just click the link below and answer the question. </motion.p>
<motion.a href="https://forms.gle/53C21vgGVhkBsCXGA" className=' Bur text-blue-600 underline hover:text-blue-400 mt-10 ' initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 1.3 }} >Click The Link -- </motion.a>


{/*  step 02  */}
<h1 className=' text-slate-900  text-[30px] mt-10 Bur  '  > Step 2 </h1>
<p className=' red  text-center mt-5 '> Get In Touche  <br /> After answer the question We will make a metting and Talk about those points  </p>
<ul className=' list-disc mt-10 '>
  <li className=' red text-[14px] text-slate-900  '> The Product Or the  Service Of the company </li>
  <li className=' red text-[14px] text-slate-900  '> Select the Target Markete  </li>
  <li className=' red text-[14px] text-slate-900  '> Select The Goals </li>
  <li className=' red text-[14px] text-slate-900  '> Select the Price and the the duration </li>
</ul>

{/*  step 03  */}

<h1 className=' text-slate-900  text-[30px] mt-10 Bur  '  > Step 3 </h1>
<p className=' text-slate-900 text-[14px] red text-center lg:w-[60%] mt-5 '> After Making the Metting and Have a Deal  I will Send You contract including the Conditions and the Garentise  To  signature for it after this You should Pay Your first Installment payment and Just  <span className=' text-blue-600 '> Start Working </span>  </p>


{/*  Cta section  */}
<motion.h1 className='red text-slate-900 mt-20 ' initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.3 }} > You Can also Contact with me in my Social Media Accounts </motion.h1>
<div className=' w-full flex justify-around  mt-10 '>
<a href=""><motion.img src="/twitter.png" alt="" className=' lg:w-10 w-4'  initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.5 }} /></a>
<a href=""><motion.img src="/snapchat.png" alt="" className=' lg:w-10 w-4' initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.7 }}  /></a>
<a href=""><motion.img src="/whatsapp.png" alt="" className=' lg:w-10 w-4'  initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.9 }} /></a>
<a href=""><motion.img src="/instagram.png" alt="" className=' lg:w-10 w-4' initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 1.1 }}  /></a>

</div>






























    </div>
  )
}

export default How