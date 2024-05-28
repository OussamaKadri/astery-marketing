'use client';
import { motion } from "framer-motion";

function Vite() {
  return (
    <motion.section className=' w-[70%] h-[80vh] bg-slate-100 rounded-3xl  flex flex-col items-center py-3 px-2 text-center  -mt-8 z-10 lg:flex-row lg:w-[60%] lg:h-[40vh]' initial={{y:100 , opacity:0}} whileInView={{y:0 ,opacity:1}} transition={{ duration:0.7 }} >
{/* الإستثمارات المدارة */}

<div className=' w-full h-[40%] bg-white rounded-3xl lg:w-[50%] lg:h-[80%] '>

<div className=' flex flex-col items-center gap-1 w-full h-[65%] bg-white rounded-3xl py-3'>
<h1 className=' text-[#4b73f8] font-normal tracking-wider Bur  '>Managed Investments </h1>
<p className='text-[25px] text-[#1C1A27] font-semibold '>50 000 $ + </p>
            </div>


            <div className='h-[35%] w-full flex justify-evenly items-start'>
<button className='bg-[#4b73f8] text-white px-6 py-2 hover:bg-[#1f53ffc5] hover:text-slate-300 rounded-lg '>Start Working </button>
<button className='bg-white text-[#4b73f8] px-6 py-2 hover:bg-[#1f53ffc5]  hover:text-slate-300 rounded-lg border-solid border-[#4b73f8] border-[2px]'> Free Consoltation  </button>
            </div>


  </div>
  {/* headline */}

  <h1 className='text-widest text-slate-900 font-semibold text-[20px] mt-3 lg:hidden'>More statistics</h1>


  {/* احصائيات أكثر */}

  <div className=' h-[55%] w-full px-6 flex flex-col  items-center lg:w-[50%] lg:h-[90%] lg:gap-3 '>
<h1 className='text-widest text-slate-900 font-semibold text-[20px] mt-7 hidden lg:block  Bur '>More statistics </h1>



<div className=' rounded-xl bg-white h-[40%] w-full text-center flex flex-col items-center justify-center '>
<p className='text-[25px] text-[#1C1A27] font-semibold red '> 1230 $ +</p>
<p  className='text-[14px] text-slate-700 font-medium red '> Daily Ads Cost </p>
</div>



<div className=' rounded-xl bg-white h-[40%] w-full text-center flex flex-col items-center justify-center  '>
<p className='text-[25px] text-[#1C1A27] font-semibold'> 56 +</p>
<p  className='text-[14px] text-slate-700 font-medium red'> Happy Client </p> 

</div>


</div>









    </motion.section>
  )
}

export default Vite