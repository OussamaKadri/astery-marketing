'use client';
import { useState } from 'react';
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

function NavLead() {

    
const [menu , setmenu] = useState(false);













  return (
    <div className='  fixed w-full h-10 flex px-6 justify-between items-center border-solid border-b-2  z-50 bg-black   '   >
        {/* logo section */}
<motion.div className=' flex items-center'  initial={{x:-500 , opacity: 0.2}} animate={{x:0 , opacity:1}} transition={{staggerChildren : 0.7}}>
    
<Image
          src="/Asterylogo.png"
          width={45}
          height={45}
          alt='Astery logo digitale marketing'
          className=' mt-2 '
          
          />
          <Image
          src="/Astery02.png"
          width={60}
          height={60}
          alt='logo 02 png and logo'
          className=' mb-7 ml-[-20px] '
          />

</motion.div>


{/* button slider mobile device */}
<button

 onClick={
 ()=>{
setmenu(true);
console.log(menu)
                 }
    }

        className=' absolute right-5 lg:hidden'

        >
            
            <Image
        src="/main-menu.png"
        width={20}
        height={20}
        alt='a main menu .jsx'
        />
    
        </button>


        <div>
            { menu ?
            // mobile device !!
            <motion.div className=' absolute w-full h-[100vh] z-10 bg-white left-0 top-0 flex flex-col ' initial={{x:-500 ,opacity:0}} animate={{opacity:1 , x:0}} transition={{duration:0.7}} exit={{ x:-500 , opacity:0}}  >
            <button className=' flex justify-end py-3 px-6' onClick={() => { setmenu(false)}}><Image
            src="/close.png"
            width={30}
            height={30}
            alt='oussama kadri'
            /></button>
          
          <div>
  <ul className=' w-full h-[80vh]  flex flex-col items-center justify-evenly'>
    <li><motion.a href="#" className=' no-underline text-black font-extralighte  text-[32px] IBM hover:text-[#1F53FF] hover:underline '  >الرئيسية</motion.a></li>
    <li><motion.a href="#" className=' no-underline text-black font-extralighte  text-[32px] IBM hover:text-[#1F53FF] hover:underline '>من نحن</motion.a></li>
    <li><motion.a href="#" className=' no-underline text-black font-extralighte  text-[32px] IBM hover:text-[#1F53FF] hover:underline  '>الخدمات </motion.a></li>
    <li><motion.a href="#" className=' no-underline text-black font-extralighte  text-[32px] IBM  hover:text-[#1F53FF] hover:underline'>أعمالنا</motion.a></li>
    <li><motion.a href="#" className=' no-underline text-black font-extralighte  text-[32px] IBM hover:text-[#1F53FF]  hover:underline'>تواصل معنا</motion.a></li>
  </ul>
  
          </div>
  
  
  
      </motion.div>
        
        
        
        
        
        
        
        
        
        :
        // desktop device

        <div className=' hidden lg:block'>
      <ul className='  flex gap-28'>
    <li><motion.a href="/" className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF] hover:underline '  >الرئيسية</motion.a></li>
    <li><motion.a href="/" className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF] hover:underline '>من نحن</motion.a></li>
    <li><motion.a href="/" className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF] hover:underline  '>الخدمات </motion.a></li>
    <li><motion.a href="/" className=' no-underline text-white font-extralighte text-[12px]  hover:text-[#1F53FF] hover:underline'>أعمالنا</motion.a></li>
    <li><motion.a href="/" className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF]  hover:underline'>تواصل معنا</motion.a></li>
  </ul> 
  </div>
        
        }




        </div>





    </div>
  )
}

export default NavLead