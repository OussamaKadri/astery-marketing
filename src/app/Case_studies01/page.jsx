import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className=' w-full h-[400vh] flex flex-col items-center   '>
{/*  Nav in Case Studer is Costume  */}
<nav className=' w-full items-center h-15 flex justify-between bg-slate-100 px-10 '>


{/* the logo  */}
<div className=' flex '><img src="/logoo.png" alt="" className=' w-20 ' /></div>
< Link href="/How" className='  bg-[#4b73f8] text-white lg:px-6 px-3  py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg IBM '> ابدء التطبيق </Link>

</nav>


{/*  the hedaline before the Image  */}
 <h1 className=' text-[#1F53FF] g text-[25px] underline mt-5   '>  تسويق لشركة تصميم منشئات ومنازل</h1>
  {/* the image  */}
      <img src="/blog.png" alt=" the buisniss type picture  " className=' w-[90%] mt-5 lg:w-[50%]   ' />
  
      
{/*  the challenges and the resultes  */}
 
 <div className=' w-[90%] lg:w-[60%] flex flex-col items-end mt-10'>
  <h1 className=' IBM font-bold text-[30px] '> التحديات </h1>

 </div>
 <hr color=' black' />
 <hr />
 <hr />
 <hr />
      
      
       </div>
  )
}

export default page