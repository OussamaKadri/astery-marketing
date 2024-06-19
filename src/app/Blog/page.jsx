'use client';
import { color } from 'framer-motion';
import { useState } from 'react';

//  the Services they are like a buttons and onclick on the button and the content will be in the second section and that will be in the next s


// buttons  
// animations  
// content  
function page() {
const [Content , setContent] = useState(false)
const [Web , setWeb] = useState(false)
const [Marketing , setMarketing] = useState(false)
const [Ads , setAds] = useState(false)
const [SocialMedia , setSocialMedia] = useState(false)
const [Vidio , setVidio] = useState(false)




// 

//  
// 
//  
// 
  return (
    <section className=' w-[100vw] h-[100vh] flex pr-10 '>

      {/* Side Bar  */}
      <div className=' pt-10 h-[100vh]  w-[15%] border-r-2 border-black border-solid bg-slate-200  '>
        
<ul className=' w-full h-full flex flex-col items-center justify-around  '>
<li className='flex items-center red hover:underline hover:text-slate-600 text-slate-950 cursor-pointer  ' style={Content ? {color:'blue'} : {color:'black'}} onClick={ () => { setContent(true) && setAds(false) && setMarketing(false) && setSocialMedia(false) && setWeb(false) && setVidio(false)}}  > <p>Content Marketing</p> <img src="top.png" alt="" className='lg:w-4 lg:h-4 w-2 rotate-90 ' /></li>
<li className='flex items-center red hover:underline hover:text-slate-600 text-slate-950 cursor-pointer '   style={SocialMedia ? {color:'blue'} : {color:'black'}} onClick={() => { setContent(false) && setAds(false) && setMarketing(false) && setSocialMedia(true) && setWeb(false) && setVidio(false) , console.log(SocialMedia)}} > <p>Social Media </p> <img src="top.png" alt="" className='lg:w-4 lg:h-4 w-2  rotate-90 ' /></li>
<li className='flex items-center red hover:underline hover:text-slate-600 text-slate-950 cursor-pointer '  style={Ads ? {color:'blue'} : {color:'black'}} onClick={ () => { setContent(false ) && setAds(true) && setMarketing(false) && setSocialMedia(false) && setWeb(false) && setVidio(false ) } }  > <p>Paid Ads</p> <img src="top.png" alt="" className='lg:w-4 lg:h-4 w-2 rotate-90 ' /></li>
<li className='flex items-center red hover:underline hover:text-slate-600 text-slate-950 cursor-pointer '  style={Marketing ? {color:'blue'} : {color:'black'}} onClick={ () => { setContent(false) && setAds(false) && setMarketing(true) && setSocialMedia(false) && setWeb(false) && setVidio(false) } }    > <p>Marekting Plan</p> <img src="top.png" alt="" className='lg:w-4 lg:h-4 w-2 rotate-90 ' /></li>
<li className='flex items-center red hover:underline hover:text-slate-600 text-slate-950 cursor-pointer '   style={Vidio ? {color:'blue'} : {color:'black'}} onClick={ () => { setContent(false) && setAds(false) && setMarketing(false) && setSocialMedia(false) && setWeb(false) && setVidio(true)}}     > <p>Vidio editing </p> <img src="top.png" alt="" className='lg:w-4 lg:h-4 w-2 rotate-90 ' /></li>
<li className='flex items-center red hover:underline hover:text-slate-600 text-slate-950 cursor-pointer '   style={Web ? {color:'blue'} : {color:'black'}} onClick={ () => { setContent(false) && setAds(false) && setMarketing(false) && setSocialMedia(false) && setWeb(true) && setVidio(false)}}   > <p>Web Development </p> <img src="top.png" alt="" className='lg:w-4 lg:h-4 w-2 rotate-90 ' /></li>


</ul>
      </div>

{/*  the Content   */}
<section className=' pt-10 w-[85%] pl-10  '>

{/* Conatent Marketing  */}
<div>
      <h1 className='Bur text-[40px] text-slate-900 text-center '>The Value of Content Marketing</h1>
      <ol className=' mt-5 red gap-10 mb-10 '>
        <li className=' mt-4'> <span className=' red text-[22px] text-slate-900 underline '>1-Attracting and Engaging Target Audience:</span>
   

      <p className=' mt-2 '>Content marketing helps businesses attract their target audience by creating valuable content that aligns with their interests and needs. By providing relevant information, businesses engage potential customers throughout their journey, from awareness to decision-making </p>
        
        </li>
        {/*  */}
        <li className=' mt-4'> <span className=' red text-[22px] text-slate-900 underline '>2-Generating Leads and Conversions:</span>
   

      <p className=' mt-2 '> High-quality content serves as a powerful lead generation tool. When potential customers find value in your content, they are more likely to engage with your brand and eventually convert into paying customers </p>
        
        </li>
        {/*  */}
        <li className=' mt-4'> <span className=' red text-[22px] text-slate-900 underline '>3-Enhancing Brand Reputation and Trust:</span>
   

      <p className=' mt-2 '>Consistent, informative content builds credibility and trust. By addressing pain points and providing solutions, businesses create a positive brand reputation and encourage repeat business </p>
        
        </li>
        {/*  */}
        <li className=' mt-4'> <span className=' red text-[22px] text-slate-900 underline '>4-Strengthening Customer Relationships:</span>
   

      <p className=' mt-2 '>Content marketing allows you to nurture relationships with existing customers , Regularly sharing valuable content keeps your brand top-of-mind and fosters loyalty</p>
        </li>


        
      </ol>


    </div>

































</section>









      
      
      
      
      
      
      
      
      
      
   </section>
  )
}

export default page