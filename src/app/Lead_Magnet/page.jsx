'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';




// here we write about How to get thier first free consoltaion and that will be in whatsapp or by writing the email bellow 
// we have two choise whatsapp  or the other platforms 







function page() {

  
    const FormRef = useRef(null);
    const [ sendState , setStateSend] = useState(false)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_5w860jv', 'template_qkp7hbh', FormRef.current, {
          publicKey: 'Xp5RYw49Whi7bcouW',
        })
        .then(
          () => {
            setStateSend(true)
            
          
          },
          (error) => {
           alert('Faild ... , There is an eroor in the Networke ! 404')
          },
        );
    };
  

  
  return (
  // Nav **
  // a small descreption about what the prosses will be   ** 
  // Form 
  // whatsapp Link 
   <section className=' w-[100vw] h-[130vh] bg-slate-200 flex flex-col items-center overflow-x-hidden         '>
<div className=' w-full flex items-center justify-center '>
<img src="Astra.png" alt="" className=' w-10' />

</div>


<motion.h1 initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.65}} className=' red lg:text-[40px] text-[30px] text-slate-900 text-center mt-10    '> How You will Get your first free consultation ? </motion.h1>
<p className=' text-slate-950 red mt-5 w-[70%] text-center '>
  For get your first free consultation you must contact with me in My whatsapp directly or by doing this form here and Our Team will call you later 
</p>

{/*  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}
{/*  the Form  */}



< div className=' w-[100vw] flex  flex-col lg:flex-row  justify-around  items-center overflow-x-hidden px-4  '>
{/*  the form  */}
<motion.div class="flex flex-col items-center justify-center h-screen dark  " initial={{ opacity:1 , x:0 }} whileInView={{opacity:1 , x:0}} transition={{ duration: 0.65}}>
  <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-200 mb-4">Metting Form </h2>

    <form class="flex flex-wrap" ref={FormRef} onSubmit={sendEmail}>

      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="Full name"
        name='Fullname'
      />

      <input
        type="email"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Email"
        name='Email'
      />

      <input
        type="number"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
        placeholder="Phone Number"
        name='PhoneNumber'
      />

      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Company Name"
        name='CompanyName'
      />

<label htmlFor="" className=' text-white red -mt-2'>Metting Day</label>
      <input
        type="date"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
        placeholder="Date of metting "
        name='Date'
      />

      

      <button
        type="submit"
        class="bg-gradient-to-r  from-indigo-500 to-blue-500 text-white font-bold py-2 ml-6 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >

        Submit
      </button>
    </form>
  </div>
</motion.div>

{/*  the aleter */}
{ sendState ? 
  <motion.div className=' text-green-600 IBM text-[17px] ' animate={{ x : 0 }} initial={{x:-200}} transition={{ duration:1}}  > Thanks , We will Call You Later  </motion.div> 
  : 
  <div></div>
  }
 

 {/*  The whatsapp Link  */}
 <div className=' flex flex-col items-center gap-5      ' >
 <motion.h1 initial={{ opacity:0 , y:100 }} whileInView={{opacity:1 , y:0}} transition={{ duration: 0.65}} className=' Bur underline text-blue-500 hover:text-blue-400 '  > <a href="https://heylink.me/oussama_446">Or Just Send Me a Message Here !</a></motion.h1>
<img src="/whatsapp.png" alt="" className=' w-16 ' />

 </div>














</div>
























   </section>

































  )
}

export default page