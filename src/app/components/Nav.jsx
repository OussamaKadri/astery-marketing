'use client';
import { useState , useEffect } from 'react';
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import  { Link} from 'react-scroll/modules'

function Nav() {

    const [color , setcolor] = useState(true);
const [bg , setbg] = useState('transparent');
const [border , setborder] = useState('transparent');
const [menu , setmenu] = useState(false);


const changecolore = () => {
   
  if(window.scrollY >= 40){
    setcolor(true)
  }else{
    setcolor(false)
  }
};



const setBG = () => {
 if(color === true){
  setbg('black')
 }
 else{
  setbg('transparent')
 }
}






useEffect(() => {
window.addEventListener('scroll' , setBG)
 return () => {
  window.addEventListener('scroll' , setBG)
  console.log(color) }
} , [])

useEffect(() => {
  window.addEventListener('scroll' , changecolore)
   return () => {
    window.addEventListener('scroll' , changecolore)
   }
  } , [])


  return (
    <div className='  fixed w-full h-10 flex px-6 justify-between items-center border-solid border-b-2  z-50   '  style={{backgroundColor:`${bg}`, borderColor:`${border}`}} >
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
    <li><Link activeClass="active"  to="Main" spy={true}  smooth={true}   offset={50}  duration={500}  onClick={() => {setmenu(false)}} className=' no-underline text-black font-extralighte  text-[32px] red hover:text-[#1F53FF] hover:underline '  >Home</Link></li>
    <li><Link  activeClass="active"  to="Main" spy={true}  smooth={true}   offset={50}  duration={500} onClick={() => {setmenu(false)}} className=' no-underline text-black font-extralighte  text-[32px] red hover:text-[#1F53FF] hover:underline '>About</Link></li>
    <li><Link activeClass="active"  to="Services" spy={true}  smooth={true}   offset={50}  duration={500} onClick={() => {setmenu(false)}}  className=' no-underline text-black font-extralighte  text-[32px] red hover:text-[#1F53FF] hover:underline  '>Services</Link></li>
    <li><Link   to="OurWork" spy={true}  smooth={true}   offset={50}  duration={500} onClick={() => {setmenu(false)}}  className=' no-underline text-black font-extralighte  text-[32px] red  hover:text-[#1F53FF] hover:underline cursor-pointer'>Our Work </Link></li>
    <li><Link activeClass="active"  to="Contact" spy={true}  smooth={true}   offset={50}  duration={500}  onClick={() => {setmenu(false)}} className=' no-underline text-black font-extralighte  text-[32px] red hover:text-[#1F53FF]  hover:underline'>Contact</Link></li>
    <li><Link activeClass="active"  to="LeadMagnet" spy={true}  smooth={true}   offset={50}  duration={500} onClick={() => {setmenu(false)}}  className=' text-[22px] px-3 py-3 border-2 border-solid rounded-lg border-[#1F53FF] text-[#1F53FF] '  whileHover={{color:"white" , backgroundColor:"#1F53FF"}} >
    Get your first free consultation
  </Link></li>
  </ul>
  
          </div>
  
  
  
      </motion.div>
        
        
        
        
        
        
        
        
        
        :
        // desktop device

        <div className=' hidden lg:block'>
      <ul className='  flex gap-28'>
    <li><button><Link   to="Main" spy={true}  smooth={true}   offset={50}  duration={500}  className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF] hover:underline red '  >Home</Link> </button></li>
    <li><button><Link   to="Main" spy={true}  smooth={true}   offset={50}  duration={500} className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF] hover:underline red '>About </Link></button></li>
    <li><button><Link   to="Services" spy={true}  smooth={true}   offset={50}  duration={500} className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF] hover:underline red   '>Services</Link></button></li>
    <li><button><Link   to="OurWork" spy={true}  smooth={true}   offset={50}  duration={500}  className=' no-underline text-white font-extralighte text-[12px]  hover:text-[#1F53FF] hover:underline red '>Our Work</Link></button></li>
    <li><button><Link   to="Contact" spy={true}  smooth={true}   offset={50}  duration={500}  className=' no-underline text-white font-extralighte text-[12px] hover:text-[#1F53FF]  hover:underline red '>Contact</Link></button></li>
    <li><button><Link   to="LeadMagnet" spy={true}  smooth={true}   offset={50}  duration={500}  className=' text-[12px] px-6 py-1 border-2 border-solid rounded-lg border-[#1F53FF] text-[#1F53FF] red ' whileHover={{color:"white" , backgroundColor:"#1F53FF"}} >
    Get your first free consultation
  </Link></button></li>
  </ul> </div>
        
        }




        </div>





    </div>
  )
}

export default Nav