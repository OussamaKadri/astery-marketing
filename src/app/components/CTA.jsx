'use client';
import React from 'react'
import Link from 'next/link'
import { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';



function CTA() {
  const FormRef = useRef(null);
  const [send , Setsend] = useState(false);

  // send function 



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0xu5fvy', 'template_gn0vmss', FormRef.current, {
        publicKey: 'Xp5RYw49Whi7bcouW',
      })
      .then(
        () => {
          Setsend(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <section className=' w-full h-full  flex flex-col items-center  ' id='Contact' >
        {/* the copywrite section  */}

        <div className=' w-full h-[30%]  text-center pt-24 '>
            <motion.h1 className=' text-[30px] font-extrabold Bur text-slate-900 ' whileInView={{y:0 , opacity:1}} initial={{y:100 , opacity:0}} transition={{duration:0.8}}>What Your are waiting to Achive Your Goals ?</motion.h1>
            <motion.p className=' red font-light text-slate-500 text-[15px] mb-8 '  whileInView={{y:0 , opacity:1}} initial={{y:100 , opacity:0}} transition={{duration:0.8}} > Contact us for your first meeting </motion.p>

            < Link href="How" className=' mt-8 bg-[#4b73f8] text-white px-6 py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg red  '> For More information </Link>

        </div>


            {/*  contact section */}


        <section className=' w-full h-[70%] bg-[#33363C] flex-col flex items-center lg:flex-row lg:items-center  ' > 

            {/* form */}
            <form  className='  w-[90%] lg:w-[65%]  '  autoComplete='off' ref={FormRef} onSubmit={sendEmail} >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Get It Know 
            
            
              </p><div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                Full Name 
                </label>
                <input placeholder="Full Name " className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"  type="text"  name='Name'   />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
              email 
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="email "  type="email"  name='email'   />
              </div>
              <div className=' flex gap-3'>

              

                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" Phone Number "  type="number" name='phone'/>            

            
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" Company Name "  type="text" name='buisniss'/>            
                 </div>
                 <div>

                <label className="block mb-2 text-sm font-medium text-gray-900">
                Message
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" Message Or Service 'optinal' "  type="text" name='message'/>            
                 </div>
    
  { send ? 
  <motion.div className=' text-green-600 IBM text-[17px] ' animate={{ x : 0 }} initial={{x:-200}} transition={{ duration:1}}  > Thanks , We will Call You Later  </motion.div> 
  : 
  <div></div>
  }


              <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Send
              </button>
            
          </div>
        </div>
      </div>
      
      </form>

      {/* social Media Contact  */}

<section className='lg:w-[30%] lg:h-[80%] w-full  '> 



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <a herf='https://heylink.me/oussama_446'><img src="/whatsapp.png" alt="whatsappa png" className=' w-6 lg:w-9 ' /></a>
    <a herf='https://heylink.me/oussama_446' className=' IBM text-[#1f53ffea] hover:underline '>Whatsapp</a>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <a herf='https://heylink.me/oussama_446'><img src="/instagram.png" alt="" className=' w-6 lg:w-9 ' /></a> 
    <a herf='https://heylink.me/oussama_446' className=' IBM text-[#1f53ffea]  hover:underline'>Instagram</a>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <a herf='https://heylink.me/oussama_446'><img src="/twitter.png" alt="" className=' w-6 lg:w-9 ' /></a>
    <a herf='https://heylink.me/oussama_446' className=' IBM text-[#1f53ffea]  hover:underline'>Twitter</a>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <a herf='https://heylink.me/oussama_446'><img src="/snapchat.png" alt="" className=' w-6 lg:w-9 ' /></a>
    <a herf='https://heylink.me/oussama_446' className=' IBM text-[#1f53ffea]  hover:underline '>Snapchat</a>
</div>





</section>





        





      </section>


    

     

    </section>
  )
}

export default CTA