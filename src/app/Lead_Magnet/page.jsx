'use client';
import { useState} from 'react';
import axios from 'axios';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavLead from '../components/NavLead'
function page() {

  const [firstName , setfirstName ] = useState('');
  const [ SecondName  , setSecondName] = useState('');
  const [Email , setEmail ] = useState('');
  const [ linkState , setLinkState] = useState(false);
  

  // submit values
  const handler_submit = (e) => {
e.preventDefault();
//console.log(firstName , SecondName , Email)
const Data = {
  First_Name : firstName,
  Second_Name : SecondName,
  email : Email,
}
axios.post('https://sheet.best/api/sheets/3c908c39-2e7a-4798-9f62-15b5ad8eeb45' , Data).then((Response) => {
  console.log(Response);
  /// removing the data 
  setfirstName('');
  setSecondName('');
  setEmail('');
  if(Response.status === 200){
    setLinkState(true)
  }else{
    setLinkState(false)
  }
})


  }

  



  return (
    <section className=' flex flex-col items-center   h-[200vh]'>
      <NavLead/>
    
      

<div className=' w-[80%] lg:w-[65%] aspect-video  mt-10'>
<iframe src="https://www.youtube.com/embed/jA5AiGMy_9g?si=MS6_A06U9zwYdQ3F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className=' rounded-2xl w-full h-full' ></iframe>
</div>




<form  className=' mt-20 w-[90%] lg:w-[65%] ' onSubmit={handler_submit} autoComplete='off'  >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Get It Know 
            
            
              </p><div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Set Your First Name 
                </label>
                <input placeholder="Your First Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"  type="text"  name='firstName' onChange={(e) => setfirstName(e.target.value)} value={firstName}  />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Set Your Seconde Name
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Your seconde Name"  type="text"  name='SecondName' onChange={(e) => setSecondName(e.target.value)} value={SecondName}  />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your Email 
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" Your Email"  type="email" name='Email' onChange={(e) => setEmail(e.target.value)} value={Email}/>            
                 </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                </div>
                
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Send
              </button>
            
          </div>
        </div>
      </div>
      
      </form>




      { linkState ? 
      <motion.div className=' w-full h-[40vh] absolute top-10 bg-[#1C1A27] flex flex-col items-center justify-center gap-10 ' whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-200}} transition={{duration:0.44}} >
<button><img src="/close.png" alt="any thing" className=' h-5 absolute top-5 right-7' onClick={() => setLinkState(false)}/></button>

<h1 className=' text-[45px] font-bold text-slate-300 IBM'>   احصل على خطتك التسويقية مجانا
</h1>

<Link href="/Course" className=' w-[80%] lg:w-[50%] h-12 bg-[#1F53FF] px-4 py-2 rounded-xl mt-8 IBM text-center ' >  احصل على خطتك التسويقية مجانا
</Link>

      </motion.div> 
      :
       <div>

         </div>

       }
    



    </section>
  )
}

export default page;