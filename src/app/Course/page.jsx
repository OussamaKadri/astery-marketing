import React from 'react'
import NavLead from '../components/NavLead'
import Link from 'next/link'
function page() {
  return (
    <section className=' w-full h-[140vh]  flex flex-col items-center bg-slate-200 '>
        <NavLead/>
        <div className=' w-[90%] aspect-video lg:w-[70%] mt-14 '>
<iframe className=' w-full h-full rounded-2xl ' src="https://www.youtube.com/embed/y196bDVZ_dM?si=x2O85JJ5NM7SeXi5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
{/* button of start application  */}



<button className=' mt-8 bg-[#4b73f8] text-white px-6 py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg IBM'><Link href="/How">ابدء التطبيق 
</Link>
</button>


{/* copywrite the webpage  */}


<div className=' w-[65%] mt-8 text-center '>
<h1 className=' g text-[#4b73f8] text-[20px]   '> احصل على خطتك التسويقية مجان </h1>
<p className=' mt-7 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id sapiente, nobis ab cum maxime blanditii
    s deserunt, aliquam, vitae repellendus fugit saepe possimus esse distinctio quia perspiciatis voluptas
     placeat dolorum.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid hic ullam reici
     endis amet, saepe commodi architecto odio ratione et consequatur tempor
     e facere nisi incidunt ut impedit ipsum velit! Nemo!</p>
</div>






    </section>
  )
}

export default page