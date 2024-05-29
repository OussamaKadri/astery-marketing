'use client';
import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
import { motion  , easeInOut} from 'framer-motion'
import { useState , useEffect } from 'react';
import Link from 'next/link';
function Hero( ) {

  const [scroll , setscroll] = useState(false)
  const [display , setdisplay] = useState('block');
  
  const do_in_scroll = () => {
    if(window.scrollY >= 400){
  setscroll(true)
    }
  }


useEffect(() => {
window.addEventListener('scroll' , do_in_scroll)
return () => {
  window.addEventListener('scroll' , do_in_scroll )
}
},[])




  return (
    <section className=' w-full h-full' id='Main'> 
{/*  Navigation */}

{/* THE CONTENT SECTION */}
<motion.section className=' w-full h-[150vh] flex flex-col  lg:h-[110vh] md:h-[110vh]  lg:flex-row md:flex-row '  >

{/* content sections */}
<section className=' w-full h-[90vh] text-center pt-16 lg:text-start lg:pl-44 gap-24 bg-[#1C1A27] px-4 lg:h-full md:h-full md:w-[60%] lg:w-[60%]  ' >

  {/*  writer and ketba */}
<h3 className=" text-[#1F53FF] font-light tracking-wider mb-5 g ">
Perfect results</h3>
<motion.h1 className=" text-slate-100 text-[40px] font-extrabold lg:w-[60%]  mb-5 Bur" whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:25}} transition={{duration:0.33}}>Your perfect partner to make your brand best and stand out </motion.h1>
<motion.p className=" text-slate-200 lg:text-slate-500   mb-5 red " whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:25}} transition={{duration:0.53}}>We are experts in the Digital Marketing  and increasing sales by creating customized and effective marketing strategies.</motion.p>
<div>

  {/* media buying   */}
  <div className=' w-full flex px-2  items-center '>

    <div className=' flex flex-col px-3 gap-5 items-center'>

    <div className=" w-full h-[45%] gap-2  flex  items-center " >
  <div className=" bg-white h-16 w-16 rounded-full flex justify-center items-center  border-solid border-[2px] border-white"> <Image src="/meta.png" width={30} height={30} alt="meta "/></div>
  <p  className=" font-semibold text-white text-[11px] red ">Meta <br /> <span className=" font-extralight g  mt-2  text-slate-300 "> Success Partner </span> </p>
</div>

<div  className="w-full h-[45%] gap-2  flex  items-center">
<div className=" bg-white h-16 w-16 rounded-full flex justify-center items-center  border-solid border-[2px] border-white"> <Image src="/snapchat.png" width={30} height={30} alt="meta "/></div>
<p  className=" font-semibold text-white text-[11px] red"> Snapchat <br /> <span className=" font-extralight g mt-2  text-slate-300  "> Success Partner</span></p>
</div>





    </div>


{/* second column */}

    <div className=' flex flex-col px-3 gap-5  items-center'>

    <div className=" w-full h-[45%] gap-2  flex  items-center " >
  <div className=" bg-white h-16 w-16 rounded-full flex justify-center items-center  border-solid border-[2px] border-white"> <Image src="/tik-tok.png" width={30} height={30} alt="meta "/></div>
  <p  className=" font-semibold text-white text-[11px] red"> Tik Tok <br /> <span className=" font-extralight g mt-2 ">Success Partner</span></p>
</div>

<div className=" w-full h-[45%] gap-2  flex  items-center " >
  <div className=" bg-white h-16 w-16 rounded-full flex justify-center items-center  border-solid border-[2px] border-white"> <Image src="/search (1).png" width={30} height={30} alt="meta "/></div>
  <p  className=" font-semibold text-white text-[11px] red"> Google <br /> <span className=" font-extralight g mt-2 "> Success Partner </span></p>
</div>


    </div>

  </div>

  {/*  the buttone */}
  <div className=' w-full pt-6 flex justify-center lg:hidden '>
    <button className=' px-3 py-2 bg-[#1f53ffbf] IBM  hover:bg-[#1f53ffc7] rounded-lg '>
      <Link href="/Lead_Magnet"> Get your first free consultation
   </Link>
   
    </button>
  </div>



</div>


</section>




{/* the vidio sections */}
< section className=' w-full h-[50vh] bg-[#33363C] lg:h-full lg:w-[40%] md:h-full md:w-[40%] flex flex-col items-center justify-center  '>
  <img src="/Astra02.png" alt="logo" className=' mt-10' />
  < Link href="/How" className=' mt-8 bg-[#4b73f8] text-white lg:px-6 px-3  py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg Bur '> Up To 11 </Link>

</section>








</motion.section>  


{/* the allerte sections */}


{scroll ?  <motion.div className=" gap-3 text-center rounded-2xl bg-[#1C1A27] px-2 py-3 fixed bottom-10 right-0 z-20" style={{display:`${display}`}} initial={{ x:500 , opacity:0}} animate={{ x:0 , opacity:1}} transition={{duration:0.7 , ease:easeInOut}}  >

<div className=" flex justify-end items-center py-2 px-2" onClick={() => {setdisplay('none')}}><Image src="/close.png" width={15} height={15} alt="croos png" className=" hover:bg-slate-300"/> </div>

<div className=" px-4 py-2 text-center font-light text-slate-300 rounded-2xl bg-[#33363C] flex flex-col gap-5">  Start Application  
<button className='bg-[#4b73f8] text-white px-3 py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg '><Link href='/How'><p>Yes </p></Link>  </button>
</div>


</motion.div>
:
<div>

</div> }






    </section>
  )
}

export default Hero