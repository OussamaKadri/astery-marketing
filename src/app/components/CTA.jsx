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
      .sendForm('service_aym94ss', 'template_gn0vmss', FormRef.current, {
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
            <motion.h1 className=' text-[40px] font-extrabold g text-slate-900 ' whileInView={{y:0 , opacity:1}} initial={{y:100 , opacity:0}} transition={{duration:0.8}}>ماذا تنتظر لتحقيق أهدافك ؟</motion.h1>
            <motion.p className=' IBM font-light text-slate-500 text-[15px] mb-8 '  whileInView={{y:0 , opacity:1}} initial={{y:100 , opacity:0}} transition={{duration:0.8}} >   تواصل معنا للحصول على أول إجتماع    </motion.p>

            < Link href="Lead_Magnet" className=' mt-8 bg-[#4b73f8] text-white px-6 py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg IBM '> للمزيد من المعلومات</Link>

        </div>


            {/*  contact section */}


        <section className=' w-full h-[70%] bg-[#33363C] flex-col flex lg:flex-row lg:items-center  ' > 

            {/* form */}
            <form  className='  w-[90%] lg:w-[65%]  '  autoComplete='off' ref={FormRef} onSubmit={sendEmail} >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Get It Know 
            
            
              </p><div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                الإسم الكامل
                </label>
                <input placeholder="الإسم الكامل" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"  type="text"  name='Name'   />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                البريد الإلكتروني
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="البريد الإلكتروني"  type="email"  name='email'   />
              </div>
              <div className=' flex gap-3'>

              

                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" رقم الهاتف"  type="number" name='phone'/>            

            
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" نوع الشركة "  type="text" name='buisniss'/>            
                 </div>
                 <div>

                <label className="block mb-2 text-sm font-medium text-gray-900">
                الرسالة أو نوع الخدمة 
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" الرسالة أو نوع الخدمة "  type="text" name='message'/>            
                 </div>
    
  { send ? 
  <motion.div className=' text-green-600 IBM text-[17px] ' animate={{ x : 0 }} initial={{x:-200}} transition={{ duration:1}}  > Sucsses ! </motion.div> 
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

<section className='lg:w-[30%] lg:h-[80%]  '> 



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/whatsapp.png" alt="whatsappa png" className=' w-4 lg:w-9 ' /></Link>
    <Link href="/" className=' IBM text-[#1f53ffea] hover:underline '>Whatsapp</Link>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/instagram.png" alt="" className=' w-4 lg:w-9 ' /></Link> 
    <Link href="/" className=' IBM text-[#1f53ffea]  hover:underline'>Instagram</Link>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/twitter.png" alt="" className=' w-4 lg:w-9 ' /></Link>
    <Link href="/" className=' IBM text-[#1f53ffea]  hover:underline'>Twitter</Link>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/snapchat.png" alt="" className=' w-4 lg:w-9 ' /></Link>
    <Link href="/" className=' IBM text-[#1f53ffea]  hover:underline '>Snapchat</Link>
</div>





</section>





        





      </section>


    

     

    </section>
  )
}

export default CTA