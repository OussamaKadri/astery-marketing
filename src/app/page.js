
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Page02 from './components/Page02'
import Lead from './components/Lead'
import OurWork from './components/OurWork'
import CTA from './components/CTA'
function page() {






  return (
    <div className=' overflow-x-hidden overflow-y-hidden'>
<section className=' h-[150vh] w-full lg:h-[110vh] md:h-[110vh] '>
<Nav />
<Hero  />

</section>

<section className='  w-full lg:h-[130vh] h-[150vh] ' >
<Page02/>

</section>

<section className=' w-full h-[80vh] bg-slate-200 pt-20 ' >
<Lead/>
</section>

<section className=' w-full lg:h-[70vh] bg-white h-[35vh]   '>

</section>

<section className=' bg-slate-200 w-full h-[80vh] lg:h-[75vh] ' >
  <OurWork/>
  
</section>

<section className=' w-full h-[130vh] flex flex-col items-center  ' >
<CTA/>
</section>




    </div>
  )
}

export default page